const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./db/db.json');
const db = low(adapter);

const users = () => {
  return db.get('users');
};

const sessions = () => {
  return db.get('sessions');
};

const findUserById = (id) => {
  try {
    console.log(id);
    return users().find({ id }).value();
  } catch (error) {
    console.log('db 에러 발생');
  }
};

const findSessionBySessionId = (sessionId) => {
  try {
    return sessions().find({ sessionId }).value();
  } catch (error) {
    console.log('db 에러 발생');
  }
};

const createSession = (sessionId, userId) => {
  try {
    sessions().push({ sessionId, userId }).write();
  } catch (error) {
    console.log('db 에러 발생');
  }
};

module.exports = { findUserById, findSessionBySessionId, createSession };
