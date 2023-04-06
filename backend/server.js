// express 설정
const express = require('express');
//cors 설정
const cors = require('cors');
require('dotenv').config();

// 포트 설정
const { PORT } = process.env;
const server = express();

// body-parser 설정
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

// router 가져오기
const serverRouter = require('./routes/data');

// router 연결하기
server.use('/data', serverRouter);
server.listen(PORT, () => {
  console.log(`데이터 통신용 서버가 ${PORT} 번에서 실행중입니다.`);
});
