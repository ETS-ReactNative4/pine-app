const palette = {
  background: '#000000',
  background2: '#121212',
  foreground: '#ffffff',
  middleground1: '#1E1E1E',
  middleground2: '#1C1C1E',
  middleground3: '#262629',
  middleground4: '#1B1B1B',
  middleground5: '#262626',
  middleground6: '#333333',
  gray1: '#8D8D92',
  gray2: '#99999F',
  gray3: '#7D7D7D',
  gray4: '#8E8E92',
  gray5: '#98989E',
  gray6: '#323235',
  gray7: '#464649',
  gray8: '#47474A',
  gray9: '#3D3D41',
  gray10: '#454545',
  gray11: '#2C2C2E',
  gray12: '#5A5A5E',
  gray13: '#929295',
  red1: '#ff453a',
  red2: '#FF3B30',
  yellow: '#FEC300',
  yellow2: '#ffd60a',
  blue: '#0A84FF',
  blue2: '#3B82F6',
  orange: '#FF9F0A',
  green: '#30d158',
  indigo: '#5e5ce6',
  pink: '#ff375f'
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
  errorText: { color: palette.red1 },
  errorMessage: { backgroundColor: palette.red1 },
  overlayCamera: { backgroundColor: palette.background },
  overlayHome: { backgroundColor: palette.background },
  overlayReceive: { backgroundColor: palette.background, borderColor: palette.background },
  homeGradientColors: ['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 1.0)'],
  addContactIcon: require('../../images/icons/AddContactDark.png'),
  settingsIcon: require('../../images/icons/SettingsDark.png'),
  backIcon: require('../../images/icons/BackDark.png'),
  shareIcon: require('../../images/icons/ShareDark.png'),
  toolbarMessagesIcon: require('../../images/icons/toolbar/MessagesDark.png'),
  toolbarReceiveIcon: require('../../images/icons/toolbar/ReceiveDark.png'),
  toolbarSendIcon: require('../../images/icons/toolbar/SendDark.png'),
  toolbarDot: { backgroundColor: palette.gray3 },
  header: { backgroundColor: palette.background },
  headerTitle: { color: palette.foreground },
  headerSubtitle: { color: palette.gray1 },
  headerButtonPrimary: { color: palette.blue },
  headerButtonDisabled: { color: palette.gray10 },
  qrAvatar: { borderColor: palette.foreground },
  qrBackground: palette.foreground,
  qrForeground: palette.background,
  qrWrapper: {
    backgroundColor: palette.foreground,
    shadowColor: palette.background
  },
  destructiveLabel: { color: palette.red1 },
  button: { backgroundColor: palette.yellow },
  buttonDisabled: { backgroundColor: palette.gray1 },
  buttonLabel: { color: palette.foreground },
  buttonLoaderColor: palette.background,
  link: { color: palette.blue },
  illustrationBitcoinWithWings: require('../../images/illustrations/BitcoinWithWingsDark.png'),
  illustrationNoContacts: require('../../images/illustrations/EmptyListAvatarDark.png'),
  illustrationNotification: require('../../images/illustrations/NotificationDark.png'),
  inputSendButton: { backgroundColor: palette.yellow },
  inputCancelButton: { backgroundColor: palette.gray2 },
  inputDisabledButton: { backgroundColor: palette.gray4, opacity: 0.5 },
  inputDisabledOverlay: { backgroundColor: palette.background },
  inputBar: { backgroundColor: palette.middleground2 },
  inputBarText: { color: palette.foreground },
  inputBarDisabledText: { color: palette.gray4 },
  inputBarErrorText: { color: palette.red1 },
  inputBarPlaceholderColor: palette.gray4,
  inputBarSelectionColor: palette.yellow,
  unitPicker: { color: palette.gray4 },
  bubbleReceived: { backgroundColor: palette.middleground3 },
  bubbleReceivedText: { color: palette.foreground },
  bubbleReceivedTextSmall: { opacity: 0.75 },
  bubbleSent: { backgroundColor: palette.yellow },
  bubbleSentText: { color: palette.foreground },
  bubbleSentTextSmall: { opacity: 1 },
  bubbleError: { backgroundColor: palette.red2 },
  bubbleErrorText: { color: palette.foreground },
  bubbleEndLeft: require('../../images/message/BubbleEndLeftDark.png'),
  bubbleEndRight: require('../../images/message/BubbleEndRightDark.png'),
  bubbleEndLeftError: require('../../images/message/BubbleEndLeftErrorDark.png'),
  bubbleEndRightError: require('../../images/message/BubbleEndRightErrorDark.png'),
  confirmTransactionView: {
    backgroundColor: palette.middleground4,
    borderTopColor: palette.middleground4
  },
  confirmTransactionDetail: { borderColor: palette.middleground3 },
  confirmTransactionLabel: { color: palette.gray5 },
  confirmTransactionValue: { color: palette.foreground },
  confirmTransactionHelpText: { color: palette.gray5 },
  confirmTransactionErrorText: { color: palette.red1 },
  feeLabelHighColor: palette.red1,
  feeLabelMediumColor: palette.orange,
  offlineNoticeWarningColor: palette.orange,
  offlineNoticeErrorColor: palette.red1,
  tableLabel: { color: palette.gray1 },
  tableBorder: { borderColor: palette.gray6 },
  tableArrow: { color: palette.gray7 },
  bigInput: { color: palette.foreground },
  bigInputSelectionColor: palette.yellow,
  bigInputPlaceholderColor: palette.gray8,
  settingsBackground: { backgroundColor: palette.background },
  settingsHeader: {
    backgroundColor: palette.background2,
    borderBottomColor: palette.middleground5
  },
  settingsItem: { borderBottomColor: palette.gray9 },
  settingsValue: { color: palette.gray5 },
  settingsUnderlayColor: palette.gray11,
  settingsGroup: {
    backgroundColor: palette.middleground2,
    borderTopColor: palette.gray9,
    borderBottomColor: palette.gray9
  },
  settingsButtonPrimary: { color: palette.blue },
  settingsButtonDisabled: { color: palette.gray10 },
  settingsCheckmark: { color: palette.blue },
  settingsGreenCheckmark: { color: palette.green },
  settingsTitle: { color: palette.gray4 },
  settingsDescription: { color: palette.gray4 },
  settingsInput: { color: palette.foreground },
  settingsArrow: { color: palette.gray12 },
  statusSuccessColor: palette.green,
  statusWarningColor: palette.orange,
  statusErrorColor: palette.red1,
  walletBalanceSpendableColor: palette.green,
  walletBalancePendingColor: palette.orange,
  walletBalanceUnredeemedColor: palette.pink,
  walletBalanceReservedColor: palette.gray13,
  walletBalanceOnChainColor: palette.green,
  walletBalanceOffChainColor: palette.indigo,
  walletBalanceInboundColor: palette.yellow2,
  stackedBarChart: { backgroundColor: palette.middleground6 },
  stackedBarChartStack: { borderLeftColor: palette.background },
  revealMnemonic: { color: palette.blue },
  mnemonicWordWrapper: {
    backgroundColor: palette.middleground2,
    borderColor: palette.gray9
  },
  mnemonicWordNumber: { color: palette.gray5 },
  mnemonicWord: { color: palette.gray5 },
  mnemonicWordInputSuccessColor: palette.green,
  mnemonicWordInputErrorColor: palette.red1,
  input: {
    backgroundColor: palette.middleground2,
    borderColor: palette.gray9
  },
  inputFocus: { borderColor: palette.blue },
  sliderTrackTintColor: palette.blue2,
  sliderTrackTintBackgroundColor: palette.gray9,
  lightningBadgeImage: require('../../images/badges/LightningBadgeDark.png'),
  smallLightningIconImage: require('../../images/icons/SmallLightningDark.png'),
  palette
};
