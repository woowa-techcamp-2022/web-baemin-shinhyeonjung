const express = require('express');
const router = express.Router();
const { findUserById, createSession } = require('../db/utils');

router.post('/signin', async (req, res, next) => {
  const { id, pw } = req.body;

  // 사용자 정보
  const user = findUserById(id);

  if (!user || pw !== user.pw) {
    res.json({ error: '아이디 또는 비밀번호가 틀렸습니다.' });
    return;
  }
  // 로그인 성공
  const sessionId = 'pkrtkhopWRERG35ohkektrphko';
  createSession(sessionId, id);

  // 쿠키 저장
  res
    .status(200)
    .cookie('session_id', sessionId, { expires: new Date(Date.now() + 9000000) })
    .json({ id: user.id });
});

module.exports = router;
