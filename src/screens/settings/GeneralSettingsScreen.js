import React, { Component } from 'react';
import { ActionSheetIOS, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { navigateWithReset, reset as resetApp } from '../../actions';
import * as settingsActions from '../../actions/settings';
import getMnemonicByKey from '../../crypto/getMnemonicByKey';
import headerStyles from '../../styles/headerStyles';
import BackButton from '../../components/BackButton';
import SettingsGroup from '../../components/SettingsGroup';
import SettingsButton from '../../components/SettingsButton';
import SettingsLink from '../../components/SettingsLink';
import BaseSettingsScreen from './BaseSettingsScreen';

@connect((state) => ({
  keys: state.keys.items,
  hasCreatedBackup: state.settings.user.hasCreatedBackup,
  balance: state.bitcoin.wallet.balance
}))
export default class GeneralSettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'General',
    headerStyle: headerStyles.header,
    headerTitleStyle: headerStyles.title,
    headerLeft: (<BackButton onPress={() => { navigation.goBack(); }} />)
  });

  _showAbout() {
    const navigation = this.props.navigation;
    navigation.navigate('About');
  }

  _flagAsUninitialized() {
    const dispatch = this.props.dispatch;

    const newSettings = {
      initialized: false,
      user: {
        hasCreatedBackup: false
      }
    };

    return dispatch(settingsActions.save(newSettings));
  }

  _createManualBackup() {
    const navigation = this.props.navigation;
    const keys = Object.values(this.props.keys);
    const defaultKey = keys[0];

    return getMnemonicByKey(defaultKey.id).then((mnemonic) => {
      navigation.navigate('BackUpMnemonic', {
        mnemonic,
        isModal: true
      });
    });
  }

  _canErase() {
    // Cannot remove a wallet with funds in it that hasn't been backed up.
    const { hasCreatedBackup, balance } = this.props;
    return balance === 0 || hasCreatedBackup;
  }

  _showWalletNotEmptyAlert() {
    Alert.alert(
      'Wallet Not Empty',
      'Cannot erase a non-empty wallet that has not been manually backed up.',
      [
        { text: 'Create Manual Backup', onPress: this._createManualBackup.bind(this) },
        { text: 'Cancel', style: 'cancel' }
      ],
      { cancelable: false }
    );
  }

  _removeWallet(keepSettings) {
    return dispatch(resetApp(keepSettings)).then(() => {
      if (keepSettings) {
        this._flagAsUninitialized();
      }

      this.props.screenProps.dismiss();
      dispatch(navigateWithReset('Welcome'));
    });
  }

  _showRemoveWalletConfirmation() {
    const dispatch = this.props.dispatch;
    const keepSettings = true;

    if (!this._canErase()) {
      return this._showWalletNotEmptyAlert();
    }

    ActionSheetIOS.showActionSheetWithOptions({
      title: 'This will erase the wallet from your device and iCloud account. You can only recover it if you have made a manual backup of your recovery key.',
      options: ['Cancel', 'Erase Wallet', 'Create Manual Backup'],
      destructiveButtonIndex: 1,
      cancelButtonIndex: 0
    }, (buttonIndex) => {
      switch (buttonIndex) {
        case 1: // Erase Wallet.
          return this._removeWallet(keepSettings);

        case 2: // Create Manual Backup.
          return this._createManualBackup();
      }
    });
  }

  _showResetAppConfirmation() {
    if (!this._canErase()) {
      return this._showWalletNotEmptyAlert();
    }

    ActionSheetIOS.showActionSheetWithOptions({
      title: 'This will erase the wallet from your device and iCloud account. You can only recover it if you have made a manual backup of your recovery key.',
      options: ['Cancel', 'Erase Wallet and Settings', 'Create Manual Backup'],
      destructiveButtonIndex: 1,
      cancelButtonIndex: 0
    }, (buttonIndex) => {
      switch (buttonIndex) {
        case 1: // Erase Wallet and Settings.
          return this._removeWallet();

        case 2: // Create Manual Backup.
          return this._createManualBackup();
      }
    });
  }

  render() {
    return (
      <BaseSettingsScreen>
        <SettingsGroup>
          <SettingsLink name='About' onPress={this._showAbout.bind(this)} isLastItem={true} />
        </SettingsGroup>

        <SettingsGroup>
          <SettingsButton
            title='Erase Wallet'
            onPress={this._showRemoveWalletConfirmation.bind(this)}
          />
          <SettingsButton
            title='Erase Wallet and Settings'
            onPress={this._showResetAppConfirmation.bind(this)}
            isLastItem={true}
          />
        </SettingsGroup>
      </BaseSettingsScreen>
    );
  }
}

GeneralSettingsScreen.propTypes = {
  screenProps: PropTypes.object,
  dispatch: PropTypes.func,
  navigation: PropTypes.any,
  keys: PropTypes.object,
  hasCreatedBackup: PropTypes.bool,
  balance: PropTypes.number
};
