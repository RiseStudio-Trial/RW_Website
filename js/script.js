$(window).on("load",function(){$(".loader-wrapper").fadeOut("slow");if($(window).width()<992){$(".video-section video").prop('muted',true);$('#myVideo')[0].play();$(".video-section .btn-volume").removeClass('active');}
if(localStorage.getItem("acceptThetan")!=='true')
$('#noticeModal').modal('show');});$(document).ready(function(){console.log("script.js Ready");if($(window).width()>991&&$('#fullpage').length>0){$('#fullpage').fullpage({sectionSelector:'.section-full',anchors:['home','video','gameplay','nfts-item','theta-coin','theta-gem','team','roadmap','partner'],licenseKey:'',autoScrolling:true,menu:'#menu-fullpage',scrollHorizontally:true,verticalCentered:true,onLeave:function(index,nextIndex,direction){console.log('anchor:',origin);var leavingSection=$(this);if(direction=='up'){$('body').addClass('fixed');}
if(direction=='down'){$('body').removeClass('fixed');}
$('.section-full').find('.animated').removeClass('go');},afterLoad:function(index,nextIndex,direction){console.log('origin',origin);console.log('index',index);console.log('nextIndex',nextIndex);$('.section-full').find('.animated').addClass('go');$('#bgvid')[0].play();if($('body').hasClass('fp-viewing-video')){$('#myVideo')[0].play();}else{$('#myVideo')[0].pause();}}});}
$(".scroll-to-target[href^='#']").on("click",function(scroll_to_target){scroll_to_target.preventDefault();var a=this.hash,i=$(a);$("html, body").stop().animate({scrollTop:i.offset().top},1500,"swing",function(){})})
function closeMenu(){$('.y-mobile-menu').removeClass('show');$('.overlay-menu').removeClass('active');}
$(".has-submenu > .btn-toggle-sub").on("click",function(e){var parentli=$(this).closest('li');if(parentli.hasClass('opened')){parentli.removeClass('opened');parentli.find('> ul.sub-menu').slideUp(400);}else{parentli.addClass('opened');parentli.find('> ul.sub-menu').slideDown(400);}
parentli.siblings('li').removeClass('opened');parentli.siblings('li').find('.has-submenu.opened').removeClass('opened');parentli.siblings('li').find('ul:visible').slideUp();})
$('.btn-menu-mobile').on("click",function(){$('.overlay-menu').toggleClass("active");$(".y-mobile-menu").toggleClass("show");return false;})
$('.overlay-menu, .m-menu-close').on("click",function(){closeMenu();})
$(".y-mobile-menu ul li a[href^='#']").on("click",function(scroll_to_target){scroll_to_target.preventDefault();var a=this.hash,i=$(a);$("html, body").stop().animate({scrollTop:i.offset().top-69},800,"swing",function(){})
$('.m-menu-close').trigger('click');})
var video=document.getElementById("myVideo");var btn=document.getElementById("myBtn");function myFunction(){if(video.paused){video.play();btn.innerHTML="Pause";}else{video.pause();btn.innerHTML="Play";}}
if($('.js-gameplay-slider').length>0){$('.js-gameplay-slider').owlCarousel({loop:true,lazyLoad:true,margin:0,responsiveClass:true,items:1,dots:true,navText:["<img src='images/mutual/btn_0001_Previuos.png' /> <span>PREVIOUS </span>","<span>NEXT </span> <img src='images/mutual/btn_0000_Nexxt.png' />"],rewindNav:true,nav:true,responsive:{0:{items:1,},480:{items:1,},768:{items:1,},1200:{items:1,}}})}
if($('.js-nfts-slider').length>0){$('.js-nfts-slider').owlCarousel({loop:true,lazyLoad:true,margin:40,responsiveClass:true,items:6,dots:true,navText:["<img src='images/mutual/btn_0001_Previuos.png' /> <span>PREVIOUS </span>","<span>NEXT </span> <img src='images/mutual/btn_0000_Nexxt.png' />"],rewindNav:true,nav:true,responsive:{0:{items:2,margin:30,},480:{items:2,},768:{items:3,},992:{items:4,},1200:{items:7,},1400:{items:7,}}})}
if($('.js-team-slider').length>0){$('.js-team-slider').owlCarousel({loop:true,margin:20,responsiveClass:true,items:5,dots:true,navText:["<img src='images/mutual/btn_0001_Previuos.png' /> <span>PREVIOUS </span>","<span>NEXT </span> <img src='images/mutual/btn_0000_Nexxt.png' />"],rewindNav:true,nav:true,responsive:{0:{items:1,},480:{items:2,},768:{items:2,},992:{items:3,},1200:{items:4,}}})}
var $videoSrc;$('.gameplay-section .gameplay-slider .item .box-content .box-right .btn-watch a').click(function(){$videoSrc=$(this).attr("data-src");console.log("button clicked"+$videoSrc);});$("#gameplayModal").on("shown.bs.modal",function(e){console.log("modal opened"+$videoSrc);$("#video-modal").attr("src",$videoSrc+"?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1");});$("#gameplayModal").on("hide.bs.modal",function(e){$("#video-modal").attr("src","");})
$("#gameplayModal").on("hide.bs.modal",function(e){$("#video").attr("src",$videoSrc);});$(".video-section .btn-volume").click(function(){if($(".video-section video").prop('muted')){$(".video-section video").prop('muted',false);$(this).addClass('active');}else{$(".video-section video").prop('muted',true);$(this).removeClass('active');}});$('#bgvid')[0].play();$("#noticeFrame").ready(function(){var iframe=document.getElementById("noticeFrame").contentWindow;$(iframe).scroll(function(){if(($(iframe).scrollTop()+$(window).height())/$(iframe).height()>=1){$('#acceptBtn').removeAttr('disabled');$('#acceptBtn').removeClass('btn-secondary');$('#acceptBtn').addClass('btn-primary');}});});});function saveAccept(){localStorage.setItem("acceptThetan","true");}
$(document).on('scroll',function(){if($(window).width()<992){var my_video=$('#myVideo');if(!$('.video-section .box-video').hasClass('go')){$(".video-section video").prop('muted',true);$(".video-section .btn-volume").removeClass('active');$('#myVideo')[0].pause();}else{$('#myVideo')[0].play();}}});