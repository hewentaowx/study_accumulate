## shell脚本监控多主机的磁盘使用情况

### 1. 设置监控主机与其他主机的ssh的证书登陆
```
ssh-genkey
ssh-copy-id 192.168.199.X 重复步骤手动发送私钥过去给其他主机
```

### 2. 主机信息文件
```bash
vim /root/shell_scripts/os.info
192.168.199.X 22 root 预发
192.168.199.X 22 root 测试
```

### 3. shell脚本
```bash
#!/bin/bash
USER_INFO_FILE='/root/shell_scripts/os.info'
WARNING_FILE='/tmp/disk.warning.file'
for IP in $(awk '{print $1}' $USER_INFO_FILE)
do
  PORT=`awk -v ip=$IP '$1==ip{print $2}' $USER_INFO_FILE`
  USER=`awk -v ip=$IP '$1==ip{print $3}' $USER_INFO_FILE`
  NAME=`awk -v ip=$IP '$1==ip{print $4}' $USER_INFO_FILE`
  DISK_INFO=`ssh -p $PORT ${USER}@$IP 'df -h' | awk 'BEGIN{OFS="="}$1~/^\/dev/{print $6,int($5)}'`
  for a in $DISK_INFO
  do
    shuzi=${a##*=}
    fenqu=${a%=*}
    if [ $shuzi -ge 80 ];then
        echo -e "${IP}（${NAME}）的目录 ${fenqu} 磁盘使用率已达${a##*=}%，请及时处理！" &&  echo -e "${IP}（${NAME}）的目录 ${fenqu} 磁盘使用率已达${a##*=}%，请及时处理！" >> $WARNING_FILE
    fi
  done
done

if [[ -f $WARNING_FILE ]];then
  cat $WARNING_FILE | mail -s '磁盘空间不足告警'  429343576@qq.com
fi
rm -rf $WARNING_FILE
```


