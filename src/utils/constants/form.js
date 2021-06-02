export const FORM_CARD_FIELDS = {
  CARD_NUMBER: 'cardNumber',
  EXP_DATE: 'expDate',
  CARD_NAME: 'card_name',
  CVV: 'cvv'
};

export const CREDIT_CARD = {
  AMEX: {
    flag: require('./../../assets/images/png/amex.svg'),
    prefix: ['34', '37']
  },
  DINNERS_CLUB: {
    flag: require('./../../assets/images/png/logo-dinersclub.png'),
    prefix: ['36', '38', '300', '301', '302', '303', '304', '305']
  },
  DISCOVER: {
    flag: require('./../../assets/images/png/discover.svg'),
    prefix: ['6']
  },
  HIPERCARD: {
    flag: require('./../../assets/images/png/logo-hipercard.png'),
    prefix: ['6062']
  },
  MASTERCARD: {
    flag: require('./../../assets/images/png/mastercard.svg'),
    prefix: ['51', '52', '53', '54', '55']
  },
  VISA: {
    flag: require('./../../assets/images/png/visa.svg'),
    prefix: ['4']
  }
};
