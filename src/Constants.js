/* eslint-disable */
const config = {
  isProduction: process.env.REACT_APP_IS_PRODUCTION,
  LOGIN_B2C: {
    URL: process.env.REACT_APP_LOGIN_B2C_URL,
    CLIENT_ID: process.env.REACT_APP_LOGIN_B2C_CLIENT_ID,
    REDIRECT_URI: process.env.REACT_APP_LOGIN_B2C_REDIRECT_URI,
    URL_REGISTER: process.env.REACT_APP_SERVICE_API + '/api/auth/login',
    URL_BACKEND: process.env.REACT_APP_LOGIN_B2C_URL_BACKEND,
    PTS_APP_ENVIRONMENT_TYPE: process.env.REACT_APP_LOGIN_B2C_PTS_APP_ENVIRONMENT_TYPE,
    PLATFORM: process.env.REACT_APP_LOGIN_B2C_PLATFORM
  },
  API: {
    AUTH: {
      REFRESH: process.env.REACT_APP_SERVICE_API + '/api/auth/refresh',
    },
    MOBILE_NO: {
      GET_SELECTED_NUMBER: process.env.REACT_APP_SERVICE_API + '/api/register/selected-number',
      AVAILABLE: process.env.REACT_APP_SERVICE_API + '/api/mobile-number/available',
      BOOKING: process.env.REACT_APP_SERVICE_API + '/api/mobile-number/booking'
    },
    PROFILE: {
      GET_PROFILE: process.env.REACT_APP_SERVICE_API + '/api/register/user-profile',
      UPDATE: process.env.REACT_APP_SERVICE_API + '/api/register/user-info',
      GET_CONFIRMATION: process.env.REACT_APP_SERVICE_API + '/api/register/confirm',
      CHECK_CARD_STATUS: process.env.REACT_APP_SERVICE_API + '/api/dopa/card-status',
      CHECK_DEATH_STATUS: process.env.REACT_APP_SERVICE_API + '/api/dopa/death-status',
      CHECK_CAN_REGISTER: process.env.REACT_APP_SERVICE_API + '/api/register/can-register',
      CHECK_USER_STATUS: process.env.REACT_APP_SERVICE_API + '/api/profile/user-status'
    },
    ADDRESS: {
      GET: process.env.REACT_APP_SERVICE_API + '/api/register/user-address',
      ADD: process.env.REACT_APP_SERVICE_API + '/api/register/user-address',
    },
    PACKAGE: {
      GET: process.env.REACT_APP_SERVICE_API + '/api/package',
      FIND: process.env.REACT_APP_SERVICE_API + '/api/package/{id}',
      REGISTER_PACKAGES: process.env.REACT_APP_SERVICE_API + '/api/register/packages',
    },
    PAYMENT: {
      REGISTER_RECURRING: process.env.REACT_APP_SERVICE_API + '/api/payment/recurring/register',
      GET_PAYMENT_LOG_BY_CHANNEL_REF_ID: process.env.REACT_APP_SERVICE_API + '/api/payment/paymentlog/',
      ADD_CARD_ONTOP: process.env.REACT_APP_SERVICE_API + '/api/payment/card-ontop'
    }
  }
}

module.exports = config