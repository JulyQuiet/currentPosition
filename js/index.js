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
