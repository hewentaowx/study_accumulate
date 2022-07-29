


### Redis🚀
#### Redis的数据结构
> string(字符串)、list(链表)、zset(sorted set 有序集合)、hash(hash类型)

#### Redis常见数据结构使用场景
**String**
> **常用命令**：set、get、decr、incr、mget等
> String数据结构是简单的key-value类型，value其实不仅可以是String，也可以是数字，常规key-value缓存应用，常规计数：微博数，粉丝数等。一个字符串最大可以存储512M

**Hash**
> **常用命令：**hget、heset、hgetall等
> Hash是一个String类型的field和value的映射表，hash特别适合存储对象。比如可以用hash存储用户信息，商品信息等。首页使用hash数据结构做缓存，因为网站首页访问量最大，通常网站的首页就用redis缓存来提高性能和并发量。

**List**
> **常用命令：**lpush、rpush、lpop、rpop、lrange等
> list就是链表，Redis list应用场景一般在微博的关注列表，粉丝列表，最新消息的排行等功能都可以用Redis的list结构来实现。只不过list是双向链表，可以支持反向查找和遍历，就是有点耗内存。

**Set**
> **常用命令：**sadd、spop、smembers、sunion等
> #### set对外提供功能和list类似是一个列表的功能，特殊的地方在于set是可以自动排重的。当需要存储一个列表数据又不希望出现重复数据时，set很好用。并且set还提供了判断某个成员是否在一个set集合内的接口。

**Sorted set**
> **常用命令：**zadd、zrange、zrem、zcard等
> 和set相比，sorted set增加了一个权重参数score，使得集合中的元素能够按score进行有序排列。在直播系统中，实时排行信息包含直播间在线用户列表，各种礼物排行榜，弹幕消息（可以理解为按消息维度的消息排行榜）等信息，适合使用Redis中的SortedSet结构进行存储。

#### 怎么理解 Redis 事务
> 事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行，事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。事务是一个原子操作：事务中的命令要么全部被执行，要么全部都不执行。

#### Redis 事务相关的命令有哪几个
> MULTI、EXEC、DISCARD、WATCH

#### Redis key 的过期时间和永久有效分别怎么设置
> EXPIRE和PERSIST命令

#### Redis 分布式锁
> setnx设置过期锁

**缓存穿透**
> Q：从redis中查找一个不存在的key找不到则又从db中查找，如果请求量很大就会导致数据全都砸到db中会对db造成很大的压力。
> A：对查询结果为空的也缓存，只是时间设置的短一点。或者将一定不存在的key值放到一个bitmap中，从请求源头进行过滤。

**缓存雪崩**
> Q：当缓存服务器重启或者大量缓存集中在某一时间失效，这样请求将全部落到db上会对后端系统造成很大压力。
> A：缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据库和写缓存其他线程等待。不同的key设置不同的过期时间。

**Redis的持久化策略**
> RDB：不同时间点将redis上的数据生成快照同步到磁盘上。缺点：耗时耗性能容易丢失数据。
> AOF：将redis执行过的指令全部记录下来，缺点：体积大恢复速度慢。

