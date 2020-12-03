## 中文医学搜索引擎demo

### Update List

2020-12-03 已打包Docker镜像...
[大工云盘下载](http://pan.dlut.edu.cn/share?id=wszrwpsjwyhh)
操作步骤具体见：[Click Here](./docker/Docker.md)

### 环境配置

* 后端使用flask简单搭建
* 数据检索使用了solr(数据较少，因此全部放到了solr上)

### Run

* 首先将data.csv放入solr中，具体操作请查看[官网solr](https://lucene.apache.org/solr/)操作
启动solr
```bash
solr start
```
注意solr启动端口与后端代码中调用的端口保持一致。
* 启动server.py
```bash
python server.py
```
* 浏览器访问 `localhost:5000/`

### To Do List

* 继续爬取数据，扩充规模（这不到一千条的数据记录太丢人了）
* 数据存储至数据库（目前全部放到了solr上...哭）
* 搭建api接口，不直接调用solr接口
* 检索算法上进行优化，最好弃用solr。