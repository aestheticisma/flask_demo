### 1. 解压docker镜像压缩包

```bash
tar -zxvf search_demo.tar.gz
```

### 2. 导入docker镜像

```bash
docker load < search_demo.tar
```

### 3. 启动image为container

```
docker container run --rm -p 5000:5000 -it search_demo:0.0.1 /bin/bash
```

### 4. 进入container中启动后端程序

```
cd /home/solr-8.6.3/
bin/solr restart -force -p 8983
cd /home/search_demo/
python3 server.py
```

### 5. 打开浏览器

```bash
# 访问 localhost:5000
```



