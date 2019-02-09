'use strict';

const {reddit} = require('../API.js');
const snoowrap = require('snoowrap');

const snoo = new snoowrap({
  userAgent: 'App',
  clientId: reddit.clientID,
  clientSecret: reddit.clientSecret,
  refreshToken: reddit.refreshToken
});

snoo.getUser('orionchocopie').getOverview().then(console.log)

