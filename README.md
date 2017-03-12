### 地理位置对象
- API:navigator.geolocation
  - getCurrentPosition(成功的回调,失败的回调,配置对象):获取位置
  - watchPosition(同上):持续监听位置变化；返回监听ID
  - clearWatch(ID):清除位置监听
- 配置对象：

key | value
---|---
enableHighAccuracy | 是否使用高精度
timeout | 是设定地理位置获取的超时时间
maximumAge | 表示允许设备从缓存中读取位置，缓存的过期时间，单位是毫秒，设为0来禁用缓存读取。如果返回的是缓存中的时间，会在timestamp中反映出来。


- 位置对象：

key | value
---|---
coords | 返回当前位置的坐标对象
timestamp | 不确定是什么时间new Date(1511006281624) 1986年左右

- 坐标对象:

key | value
---|---
accuracy | 返回用米表示的坐标精度
longitude | 返回用十进制表示的经度
latitude | 返回用十进制表示的纬度
altitudeAccuracy | 返回用米表示的海拔精度
altitude | 返回用米表示的海拔高度
heading | 方向，从正北开始以度计
speed | 返回用米/秒表示的行进速度
