const redis = require("../db");
const { promisify } = require("util");

/**
 * 重置存储 session的过期时间
 * @param key
 * @param time 过期时间设置(min)
 */
export const resetTime = (key: string, time = 60) => {
  redis.expire(key, time * 60);
};

export const promiseRedis = (client: any) => {
  return {
    exists: promisify(client.exists).bind(client),
    keys: promisify(client.keys).bind(client),
    set: promisify(client.set).bind(client),
    get: promisify(client.get).bind(client),
    del: promisify(client.del).bind(client),
    incr: promisify(client.incr).bind(client),
    decr: promisify(client.decr).bind(client),
    lpush: promisify(client.lpush).bind(client),
    hexists: promisify(client.hexists).bind(client),
    hgetall: promisify(client.hgetall).bind(client),
    hset: promisify(client.hset).bind(client),
    hmset: promisify(client.hmset).bind(client),
    hget: promisify(client.hget).bind(client),
    hincrby: promisify(client.hincrby).bind(client),
    hdel: promisify(client.hdel).bind(client),
    hvals: promisify(client.hvals).bind(client),
    hscan: promisify(client.hscan).bind(client),
    sadd: promisify(client.sadd).bind(client),
    smembers: promisify(client.smembers).bind(client),
    scard: promisify(client.scard).bind(client),
    srem: promisify(client.srem).bind(client),
  };
};
