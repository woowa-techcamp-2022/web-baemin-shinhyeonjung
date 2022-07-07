var express = require('express');
const { findSessionBySessionId, findUserById } = require('../db/utils');
var router = express.Router();

router.get('/', function (req, res, next) {
  // 이때 사용자의 정보 확인!
  const { cookies } = req;

  console.log(cookies);
  if (cookies.session_id) {
    const { sessionId, userId } = findSessionBySessionId(cookies.session_id);
    const user = findUserById(userId);
    res.render('index', { nickname: user.nickname, profileFileName: user.profileFileName });
  } else {
    res.render('index');
  }
});

module.exports = router;
