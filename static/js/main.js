/*navbar start*/
/*button animation start*/
var $navbar=$("nav .container ul");
var $button=$(".button")
function myFunction(x) {
    x.classList.toggle("change");
}
/*button animation end*/

$button.click(function(){
  $navbar.slideToggle();
});
/*slider end*/

/*fitting the slider in the top start*/
$(window).resize(function () { 
  if(window.innerWidth > 768){
    $navbar.css("display","inline-block");
  }
  else if(window.innerWidth < 768 && $button.hasClass("change")){
    $navbar.css("display","inline-block");
  }else{
    $navbar.css("display","none");
  }
});
/*fitting the slider in the top end*/

/*scroll effect start */
$about = $(".about").offset().top - 60;
$porto = $(".porto").offset().top - 60;
$contact = $(".contact").offset().top - 60;
$btns = $(".nav-bg ul li");

$btns.eq(0).click(function(){
	$("html").animate({scrollTop:0},500);
});
$btns.eq(1).click(function(){
	$("html").animate({scrollTop:$about},500);
});
$btns.eq(2).click(function(){
	$("html").animate({scrollTop: $porto},500);
});
$btns.eq(3).click(function(){
	$("html").animate({scrollTop: $contact},500);
});
/*scroll effect end*/

/*navbar end*/
$("button,input,textarea").click(function(){
  $(this).addClass("clicked")
}).blur(function(){
  $(this).removeClass("clicked");
});

// typedjs //
var typed = new Typed('#head', {
  strings: ["Hello world!","My Name is Ahmed.","And,","I'm a Web Dev."],
  typeSpeed: 70,
  showCursor: false,
});
//typedjs end //
// information showing button //
var moreInfoBtns = document.getElementsByClassName("moreInfo");
for(var i=0;i<moreInfoBtns.length;i++){
  var modalId = moreInfoBtns[i].parentElement.parentElement.nextElementSibling.id;
  $("#"+modalId).iziModal({
    headerColor: '#000',
  });
  moreInfoBtns[i].addEventListener("click",(e)=>{
    var mId = "#modal-" + e.target.id.replace("btn-","");
    $(mId).iziModal("open");
  });
}
