const palette = {
  background: '#ffffff',
  background2: '#EFEFF3',
  foreground: '#000000',
  middleground1: '#F6F6F6',
  middleground2: '#F3F3F5',
  middleground3: '#F0F0F0',
  middleground4: '#FAFAFA',
  middleground5: '#F2F2F6',
  gray1: '#B1AFB7',
  gray2: '#8A8A8F',
  gray3: '#BEBEBE',
  gray4: '#D8D8DB',
  gray5: '#999999',
  gray6: '#F0F1F4',
  gray7: '#ECECEC',
  gray8: '#8E8E93',
  gray9: '#9B9B9B',
  gray10: '#C3C3C3',
  gray11: '#E2E2E2',
  gray12: '#A7A7AB',
  gray13: '#C8C8CC',
  gray14: '#C7C7CC',
  overlay: '#FEFEFE',
  red: '#FF3B30',
  yellow1: '#FFD23F',
  yellow2: '#FFC431',
  yellow3: '#FEC300',
  blue: '#007AFF',
  orange: '#FF9500',
  orange2: '#FF8D36',
  green: '#4CD964'
};

export default {
  background: { backgroundColor: palette.background },
  text: { color: palette.foreground },
  paragraph: { color: palette.gray1 },
  title: { color: palette.foreground },
  subtitle: { color: palette.gray1 },
  subtitleUnread: { color: palette.foreground },
  label: { color: palette.gray1 },
  bulletPoint: { backgroundColor: palette.gray1 },
  sectionHeader: { backgroundColor: palette.middleground1 },
  sectionHeaderText: { color: palette.gray2 },
  errorText: { color: palette.red },
  errorMessage: { backgroundColor: palette.red },
  overlayCamera: { backgroundColor: palette.foreground },
  overlayHome: { backgroundColor: palette.overlay },
  overlayReceive: { backgroundColor: palette.overlay, borderColor: 'gray' },
  homeGradientColors: ['rgba(255, 255, 255, 0.0)', 'rgba(255, 255, 255, 1.0)'],
  addContactIcon: require('../../images/icons/AddContact.png'),
  settingsIcon: require('../../images/icons/Settings.png'),
  backIcon: require('../../images/icons/Back.png'),
  shareIcon: require('../../images/icons/Share.png'),
  toolbarMessagesIcon: require('../../images/icons/toolbar/Messages.png'),
  toolbarReceiveIcon: require('../../images/icons/toolbar/Receive.png'),
  toolbarSendIcon: require('../../images/icons/toolbar/Send.png'),
  toolbarDot: { backgroundColor: palette.gray3 },
  header: { backgroundColor: palette.background },
  headerTitle: { color: palette.foreground },
  headerSubtitle: { color: palette.gray1 },
  headerButtonPrimary: { color: palette.blue },
  headerButtonDisabled: { color: palette.gray11 },
  qrAvatar: { borderColor: palette.background },
  qrBackground: palette.background,
  qrForeground: palette.foreground,
  qrWrapper: {
    backgroundColor: palette.background,
    shadowColor: palette.foreground
  },
  destructiveLabel: { color: palette.red },
  button: { backgroundColor: palette.yellow1 },
  buttonDisabled: { backgroundColor: palette.gray1 },
  buttonLabel: { color: palette.background },
  buttonLoaderColor: palette.background,
  link: { color: palette.blue },
  illustrationBitcoinWithWings: require('../../images/illustrations/BitcoinWithWings.png'),
  illustrationNoContacts: require('../../images/illustrations/EmptyListAvatar.png'),
  illustrationNotification: require('../../images/illustrations/Notification.png'),
  inputSendButton: { backgroundColor: palette.yellow1 },
  inputCancelButton: { backgroundColor: palette.gray2 },
  inputDisabledButton: { backgroundColor: palette.gray4 },
  inputDisabledOverlay: { backgroundColor: palette.background },
  inputBar: { backgroundColor: palette.middleground2 },
  inputBarText: { color: palette.foreground },
  inputBarDisabledText: { color: palette.gray5 },
  inputBarErrorText: { color: palette.red },
  inputBarPlaceholderColor: palette.gray5,
  inputBarSelectionColor: palette.yellow2,
  unitPicker: { color: palette.gray5 },
  bubbleReceived: { backgroundColor: palette.middleground3 },
  bubbleReceivedText: { color: palette.foreground },
  bubbleReceivedTextSmall: { opacity: 0.75 },
  bubbleSent: { backgroundColor: palette.yellow3 },
  bubbleSentText: { color: palette.background },
  bubbleSentTextSmall: { opacity: 0.9 },
  bubbleError: { backgroundColor: palette.red },
  bubbleErrorText: { color: palette.background },
  bubbleEndLeft: require('../../images/message/BubbleEndLeft.png'),
  bubbleEndRight: require('../../images/message/BubbleEndRight.png'),
  bubbleEndLeftError: require('../../images/message/BubbleEndLeftError.png'),
  bubbleEndRightError: require('../../images/message/BubbleEndRightError.png'),
  confirmTransactionView: {
    backgroundColor: palette.middleground4,
    borderTopColor: palette.gray6
  },
  confirmTransactionDetail: { borderColor: palette.gray7 },
  confirmTransactionLabel: { color: palette.gray8 },
  confirmTransactionValue: { color: palette.foreground },
  confirmTransactionHelpText: { color: palette.gray8 },
  confirmTransactionErrorText: { color: palette.red },
  feeLabelHighColor: palette.red,
  feeLabelMediumColor: palette.orange,
  offlineNoticeWarningColor: palette.orange,
  offlineNoticeErrorColor: palette.red,
  tableLabel: { color: palette.gray8 },
  tableBorder: { borderColor: palette.gray7 },
  tableArrow: { color: palette.gray9 },
  bigInput: { color: palette.foreground },
  bigInputSelectionColor: palette.yellow2,
  bigInputPlaceholderColor: palette.gray10,
  settingsBackground: { backgroundColor: palette.background2 },
  settingsHeader: {
    backgroundColor: palette.background,
    borderBottomColor: palette.gray12
  },
  settingsItem: { borderBottomColor: palette.gray13 },
  settingsValue: { color: palette.gray8 },
  settingsUnderlayColor: palette.middleground4,
  settingsGroup: {
    backgroundColor: palette.background,
    borderTopColor: palette.gray13,
    borderBottomColor: palette.gray13
  },
  settingsButtonPrimary: { color: palette.blue },
  settingsButtonDisabled: { color: palette.gray2 },
  settingsCheckmark: { color: palette.blue },
  settingsGreenCheckmark: { color: palette.green },
  settingsTitle: { color: palette.gray2 },
  settingsDescription: { color: palette.gray2 },
  settingsInput: { color: palette.foreground },
  settingsArrow: { color: palette.gray14 },
  statusSuccessColor: palette.green,
  statusWarningColor: palette.orange2,
  statusErrorColor: palette.red,
  walletBalanceSpendableColor: palette.green,
  walletBalancePendingColor: palette.orange,
  walletBalanceReservedColor: palette.gray14,
  stackedBarChart: { backgroundColor: palette.middleground5 },
  stackedBarChartStack: { borderLeftColor: palette.background },
  revealMnemonic: { color: palette.blue },
  mnemonicWordWrapper: {
    backgroundColor: palette.middleground1,
    borderColor: palette.gray4
  },
  mnemonicWordNumber: { color: palette.gray5 },
  mnemonicWord: { color: palette.gray5 },
  mnemonicWordInputSuccessColor: palette.green,
  mnemonicWordInputErrorColor: palette.red,
  input: {
    backgroundColor: palette.middleground1,
    borderColor: palette.gray4
  },
  inputFocus: { borderColor: palette.blue },
  palette
};
