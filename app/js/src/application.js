/**
 * Created by andriivandakurov on 12/23/13.
 */
  snowStorm.snowColor = '#ffffff';   // blue-ish snow!?
  snowStorm.flakesMaxActive = 512;    // show more snow on screen at once
  snowStorm.useTwinkleEffect = true;
  snowStorm.snowStick = false;
  snowStorm.animationInterval = 50;
  snowStorm.followMouse = false;


//$(function(){
//  var mainScene = $(".scene-main"),
//      initSceneSize = mainScene.height(),
//      windowHeight = $(window).height(),
//      initSceneSizePerc = Math.round(initSceneSize/windowHeight*100),
//      newSceneSizePerc = initSceneSizePerc;
//
//  $(window.document).on( "scroll", function(){
//    if($(document).scrollTop()-100 > 60){
//      newSceneSizePerc+=5;
//      mainScene.css({
//        'height' : newSceneSizePerc + '%'
//      })
//    }
//    console.log("scroll: ", $(document).scrollTop());
//  });
//});