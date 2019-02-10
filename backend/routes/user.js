'use strict';

const {reddit} = require('../API.js');
const snoowrap = require('snoowrap');
const express = require('express');
const router = express.Router();

const r = new snoowrap({
  userAgent: 'App',
  clientId: reddit.clientID,
  clientSecret: reddit.clientSecret,
  refreshToken: reddit.refreshToken
});

router.get('/',(req,res) => {
  r.getUser(req.query.username).getOverview().then(res.json.bind(res))
});


module.exports = router;

// snoo.getUser('orionchocopie').getOverview().then(console.log)

