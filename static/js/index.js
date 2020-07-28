/*
* @Author: win
* @Date:   2016-09-09 12:21:34
* @Last Modified by:   win
* @Last Modified time: 2016-09-09 16:00:11
*/

'use strict';

var $key=0;//记录滚动到哪一个
var canscroll = true;//用来限制滚动频率
jQuery(document).ready(function($) {
	change_size();
	$(window).on('resize', function(event) {
		event.preventDefault();
		change_size();
	});

	/***滚动鼠标**/
	$(document).mousewheel(function(event,delta){
		if (canscroll) {
			//限制滚动
			canscroll = false;
			 $key-=delta;
			 if($key<0)   
			 {
			 	$key=0
			 }else if($key > 6)
			 {
			 	$key=7;
			 	canscroll = true;
			 	return;
			 }
			 console.log($key);
			 //滚动页面
			 $("body,html").stop().animate({
		 		"scrollTop":$(".main_box>div").eq($key).offset().top-120
		 	},700,function(){
		 		//释放滚动条
		 		canscroll = true;
		 	});
	 		//添加菜单当前色
	 		$(".nave ul li").eq($key).addClass('current').siblings().removeClass('current');

			 
		};
		 
		
	})


	/*****点击侧边菜单***/
	$(".nave ul li").click(function(event) {
		$key = $(this).index();
		$(".nave ul li").eq($(this).index()).addClass('current').siblings().removeClass('current');
		 $("body,html").stop().animate({
		 		"scrollTop":$(".main_box>div").eq($(this).index()).offset().top-120
		 	},700);
	});






});



//动态设置大小
function change_size(){
	var window_height = $(window).height();
	$(".nave").height(window_height - 120);
	var size = Number($(".nave ul li").size());
	$(".nave ul li").css({'line-height':$(".nave").height()/size+"px",'height':$(".nave").height()/size+"px"});
	$(".main_box>div").height(window_height - 120);
	$("body,html").stop().animate({
 		"scrollTop":$(".main_box>div").eq($key).offset().top-120
 	},700,function(){
 		//释放滚动条
 		canscroll = true;
 	});
	//添加菜单当前色
	$(".nave ul li").eq($key).addClass('current').siblings().removeClass('current');
}