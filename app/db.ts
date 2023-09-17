const redis = require("ioredis");
const { promiseRedis: pr } = require("./fn");

const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD, REDIS_DB } = process.env as any;

const db = new redis({
  port: REDIS_PORT, // redis的端口
  host: REDIS_HOST, // redis的允许地址
  password: REDIS_PASSWORD, // redis的密码
  db: REDIS_DB, // redis由16个db库，可以手动选择第几个，由0开始
});

db.on("ready", function () {
  console.log("Redis连接成功");
});

// 连接到redis-server回调事件
db.on("connect", function () {
  console.log('redis is now connected!')
});

db.on("reconnecting", function () {
  console.log("redis reconnecting");
});

db.on("end", function () {
  console.log("Redis Closed!");
});

db.on("warning", function () {
  console.log("Redis db: warning");
});

db.on("error", function (err: any) {
  console.error("Redis Error " + err);
});

module.exports = pr(db);
