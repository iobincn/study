// JavaScript Document
// 修复 IE 下 PNG 图片不能透明显示的问题
function fixPNG(myImage) {
var arVersion = navigator.appVersion.split("MSIE");
var version = parseFloat(arVersion[1]);
if ((version >= 5.5) && (version < 7) && (document.body.filters))
{
     var imgID = (myImage.id) ? "id='" + myImage.id + "' " : "";
     var imgClass = (myImage.className) ? "class='" + myImage.className + "' " : "";
     var imgTitle = (myImage.title) ? "title='" + myImage.title   + "' " : "title='" + myImage.alt + "' ";
     var imgStyle = "display:inline-block;" + myImage.style.cssText;
     var strNewHTML = "<span " + imgID + imgClass + imgTitle

   + " style=\"" + "width:" + myImage.width

   + "px; height:" + myImage.height

   + "px;" + imgStyle + ";"

   + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"

   + "(src=\'" + myImage.src + "\', sizingMethod='scale');\"></span>";
     myImage.outerHTML = strNewHTML;
} } 

//(function($){
//$.fn.extend({
//        Scroll:function(opt,callback){
//                //参数初始化
//                if(!opt) var opt={};
//                var _this=this.eq(0).find("ul:first");
//                var        lineH=_this.find("li:first").height(), //获取行高
//                        line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
//                        speed=opt.speed?parseInt(opt.speed,10):1000, //卷动速度，数值越大，速度越慢（毫秒）
//                        timer=opt.timer?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
//                if(line==0) line=1;
//                var upHeight=0-line*lineH;
//                //滚动函数
//                scrollUp=function(){
//                        _this.animate({
//                                marginTop:upHeight
//                        },speed,function(){
//                                for(i=1;i<=line;i++){
//                                        _this.find("li:first").appendTo(_this);
//                                }
//                                _this.css({marginTop:0});
//                        });
//                }
//                //鼠标事件绑定
//                _this.hover(function(){
//                        clearInterval(timerID);
//                },function(){
//                        timerID=setInterval("scrollUp()",timer);
//                }).mouseout();
//        }        
//})
//})(jQuery);
//
//$(document).ready(function(){
//  $(".centerInner").Scroll({line:9,speed:1500,timer:2000}); 
//  $(".centerInner").mouseover(function(){$(".centerInner").Scroll({line:9,speed:1500,timer:2000});});     
//});
window.onload=function(){
	//第一个下拉菜单：
	$(".firstMenuOne").mouseover(
	    function(){
			$(this).find("ul").show();
		}
	);
		 
	$(".firstMenuOne").mouseout(
	    function(){
			$(this).find("ul").hide();
			$(this).find(".firstMenuOne_a").css("background","none");
		}
	);
	
	//主下拉菜单：
	var showMenuOne=$(".showMenuOne");
	var menuOne=$(".menuOne");
	var showMenuTwo=$(".showMenuTwo");
	var menuTwo=$(".menuTwo");	
	showMenuOne.mouseenter(
		function()
		{
			menuOne.eq($(this).index()-1).stop().show();
		}
	);
	showMenuOne.mouseleave 
	(
		function()
		{
			menuOne.eq($(this).index()-1).stop().hide();
		}
	);
	showMenuTwo.mouseenter(
		function()
		{
			$(this).find(".menuTwo").stop().show();
		}
	);
	showMenuTwo.mouseleave(
		function(){
			$(this).find(".menuTwo").hide();
		}
	);
	//主下拉菜单颜色
	showMenuOne.mouseover
	(
		function()
		{
			$(this).find(".containLiA").css("background","url(imges/menuTwoBg.png)");
		}
	);
	showMenuOne.mouseout
	(
		function()
		{
			$(this).find(".containLiA").css("background","none");
		}
	);
	showMenuTwo.mouseover
	(
		function(){
			$(this).find(".showMenuTwoA").css("background","#fff")
			$(this).find(".showMenuTwoA").css("color","#E58100")
		}
	)
	showMenuTwo.mouseout
	(
		function(){
			$(this).find(".showMenuTwoA").css("background","url(imges/menuTwoBg.png)")
			$(this).find(".showMenuTwoA").css("color","#fff")
		}
	)
	//大滑动图片：
var imgUl = $(".imgMenu").find("ul");
var imgW = imgUl.find("li").width();
var imgL = imgUl.find("li").length - 1;
var allW = imgW * (imgL + 1);
var page = 0;
imgUl.width(allW + "px");
imgUl.find("li").eq(imgL).html(imgUl.find("li").eq(0).html());
$(".imgText").find("li").eq(imgL).html($(".imgText").find("li").eq(0).html());

function imgMenuR() {
    if (!imgUl.is(":animated")) {
        if (page >= imgUl.find("li").length - 2) {
            imgUl.animate({
                left: '-=' + imgW + "px"
            }, 300, function () {
                imgUl.css({
                    left: 0
                });
            });
            page = 0;
        } else {

            imgUl.animate({
                left: '-=' + imgW + "px"
            }, 300);
            page++;
        }
        $(".imgText").find("li").eq(page).show().siblings().hide();
    }
};

function imgMenuL() {
    if (!imgUl.is(":animated")) {
        if (page == 0) {
            imgUl.animate({
                left: '-' + (allW - imgW) + 'px'
            }, 0, function () {
                imgUl.animate({
                    left: '+=' + imgW + 'px'
                }, 300);
            });
            page = imgUl.find("li").length - 2;
        } else {
            imgUl.animate({
                left: '+=' + imgW + 'px'
            }, 300);
            page--;
        }
        $(".imgText").find("li").eq(page).show().siblings().hide();
    }
};
t = setInterval(imgMenuR, 9000);
$(".containTop").mouseenter(

function () {
    $(".buttonLR").stop().animate({
        opacity: 0.8
    });
    clearInterval(t);
});
$(".containTop").mouseleave(

function () {
    $(".buttonLR").stop().animate({
        opacity: 0
    });
    t = setInterval(imgMenuR, 9000);
});	
	//图片新闻：
	$("#buttonR").click(imgMenuR);
	$("#buttonL").click(imgMenuL);
	$(".tpNewsKong").find("li").mouseover(
	    function(){
			$(this).css("background","#f00").siblings().css("background","#7F7F7F");
			$(".tpNewsUl").find("li").eq($(this).index()).fadeIn(500).siblings().css("display","none");
			clearInterval(t1)
		}
	);
	$(".tpNewsKong").find("li").mouseout(
		function(){
			t1=setInterval(tpNews,4000);
		}
	);
	var tpPage=0;
	function tpNews(){
		if(tpPage==3)
		{
			tpPage=0;
		}else
		{
			tpPage++;
		};
		$(".tpNewsUl").find("li").eq(tpPage).fadeIn(500).siblings().css("display","none");
		  $(".tpNewsKong").find("li").eq(tpPage).css("background","#f00").siblings().css("background","#7F7F7F");
	};
	t1=setInterval(tpNews,4000);
	
	
	//财大新闻
	$(".centerUl").find("li").mouseover(
		function(){
			var eqC=$(this).index();
			if(eqC!=3)
			{
				$(".centerInner").find("ul").eq($(this).index()).show().siblings().hide();
			}
		});


	//快速通道上面的轮换图片：
	function run(imgDiv,interval,speed,enter_,L,R)
	{
		var ulInner=$(imgDiv).find("ul").html();
		var liLength=$(imgDiv).find("li").length;
		$(imgDiv).find("ul").html(ulInner+ulInner);
		var qingPage=0;
		var liWidth=$(imgDiv).find("li").width();
		var liWidthT=liWidth+"px";
		var liLength0=$(imgDiv).find("li").length;
		var maxWidth=-liLength*liWidth+"px";
		$(imgDiv).find("ul").css({width:liWidth*(liLength0)});
		function huaR(){
			if(!$(imgDiv).find("ul").is(":animated"))
			{
				if(qingPage==liLength-1)
				{
					qingPage=0;
					$(imgDiv).find("ul").animate({left:"-="+liWidthT},speed,
						function(){
							$(imgDiv).find("ul").css({left:"0px"})
						}
					);
					
				}else
				{
					$(imgDiv).find("ul").animate({left:"-="+liWidthT},speed);
					qingPage++;
				}
			}
		}	
		function huaL(){
			if(!$(imgDiv).find("ul").is(":animated"))
			{
				if(qingPage==0)
				{
					
					$(imgDiv).find("ul").animate({left:maxWidth},0,
						function(){
							$(imgDiv).find("ul").animate({left:"+="+liWidthT},speed);
						}
					);
					qingPage=liLength-1;
					
				}else
				{
					$(imgDiv).find("ul").animate({left:"+="+liWidthT},speed);
					qingPage--;
				}
			}
		}
		$(R).click(huaR);
		$(L).click(huaL);
		var t3=setInterval(huaR,interval);
		$(enter_).mouseenter(function(){clearInterval(t3)});
		$(enter_).mouseleave(function(){t3=setInterval(huaR,interval)});
	}
	run(".xiaoQing",5000,300,".tongdao",".huaL",".huaR");
	
	
	
	//学校简介页面：收缩菜单。
	$(".aboutLi").click(
		function(){
			$(this).find("ul").slideDown();
			$(this).siblings().find("ul").slideUp();
			$(this).find("span").css({background:"url(imges/schoolIn/twotitle.jpg)"});
			$(this).find("span").find("a").css({color:"#fff"});
			$(this).siblings().find("span").css({background:"url(imges/schoolIn/twotitle_down.jpg)"});
			$(this).siblings().find("span").find("a").css({color:"#2A2A2A"});
		}
	);
	$(".aboutLi").mouseover(
		function(){
			$(this).find("span").css({background:"url(imges/schoolIn/twotitle.jpg)"});
			$(this).find("span").find("a").css({color:"#fff"});
			$(this).siblings().find("span").css({background:"url(imges/schoolIn/twotitle_down.jpg)"});
			$(this).siblings().find("span").find("a").css({color:"#2A2A2A"});
		}
	);
	//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//	function bb(){
//		var ci=$(".centerInner");
//		var ci_u=$(".centerInner").find("ul");
//		var pa=1;	
//		var cc=ci_u.eq(0).css("height");
//		for(i=0;i<4;i++)
//		{
//			ci_u.eq(i).html(ci_u.eq(i).html()+ci_u.eq(i).html());
//		}
//		function aa(){
//			if(pa==2)
//			{
//				ci_u.animate({marginTop:"0px"},0);
//				pa=1;
//			}
//			else
//			{
//				ci_u.animate({marginTop:"-=225px"},1500);
//				pa++;
//			}
//		}
//		var t1=setInterval(aa,4000);
//	}
//	bb();
//	$(".centerUl").find("li").mouseover(aa)
	
};