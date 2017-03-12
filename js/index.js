var showSucccess = function(e) {
    console.log(e);
    ['accuracy','longitude','latitude','altitudeAccuracy','altitude','heading','speed'].forEach(function(item){
          document.querySelector('.'+item).innerHTML = e.coords[item] || '无'
    })
}
var showError = function(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('拒绝了地理位置请求')
            break;
        case error.POSITION_UNAVAILABLE:
            alert('位置信息不可用')
            break;
        case error.TIMEOUT:
            alert('请求超时')
            break;
        case error.UNKNOWN_ERROR:
            alert('出现未知错误')
            break;
    }
}
navigator.geolocation.watchPosition(showSucccess, showError,{
  enableHighAccuracy:true,
  timeout:15000,
  maximumAge:5000
})
//位置对象：
// coords——返回当前位置的坐标，即Coordinates对象；
// timestamp——返回获取坐标信息的时间；???new Date(1511006281624) 1986年左右
// Coordinates对象成员：
// latitude——返回用十进制表示的纬度；
// longitude——返回用十进制表示的经度；
// altitude——返回用米表示的海拔高度；
// accuracy——返回用米表示的坐标精度；
// altitudeAccuracy——返回用米表示的海拔精度；
// heading——返回用度表示的行进方向；
// speed——返回用米/秒表示的行进速度；

// enableHighAccuracy是否使用高精度（可用的时候）
// timeout是设定地理位置获取的超时时间（单位为毫秒，用户选择允许的时间不计算在内）；
// maximumAge表示允许设备从缓存中读取位置，缓存的过期时间，单位是毫秒，设为0来禁用缓存读取。如果返回的是缓存中的时间，会在timestamp中反映出来。
