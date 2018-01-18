var minSize=5;//雪花的最小尺码
var maxSize=50;//雪花的最大尺码
var newOn=100;//单位毫秒
var falckColor="#fff";//雪片颜色
var falck=$("<div></div>").css({"position":"absolute","top":"-50px"}).html("*");
$(function(){
    //获取浏览器高度和宽度
    var documentHeight=$(document).height();
    var documentWidth=$(document).width();
    setInterval(function(){
    //产生一个0-1之间的随机数
    //产生的位置
    var startPositionLeft=Math.random()*documentWidth;
    //开始产生雪花的透明度
    var startOpacity=0.7+Math.random()*0.3;
    //雪花在底部消失的位置
    var endPositionTop=documentHeight;
    //雪花在底部左右的位置
    var endPositionLeft=Math.random()*documentWidth;
    //雪花的速度
    var durationFall=5000+Math.random()*3000;
    //雪花的大小
    var sizeFlack=minSize+Math.random()*maxSize;
    //把雪花添加到body
    falck.clone().appendTo("body").css({
        "left":startPositionLeft,
        "opacity":startOpacity,
        "font-size":sizeFlack,
        "color":falckColor
    }).animate({
        "top":endPositionTop,
        "left":endPositionLeft,
        "opcaity":0.5
    },durationFall,function(){
        $(this).remove();
    });
    },newOn);
});