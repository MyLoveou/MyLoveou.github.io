var  OriginTitle  =  document.title;

var  titleTime;

document.addEventListener('visibilitychange', function () {

 if (document.hidden) {

 document.title  =  '我在这里等你！';

 clearTimeout(titleTime);

    }

 else {

 document.title  =  '欢迎回来！';

 titleTime  =  setTimeout(function () {

 document.title  =  OriginTitle;

}, 2000);

    }

});