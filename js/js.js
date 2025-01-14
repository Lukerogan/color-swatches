// $(document).ready(function(){
//     $(".blue").hover(function(){
//       $(".main-img").css("background-color", "yellow");
//       }, function(){
//       $(this).css("background-color", "pink");
//     });
//   });

document.querySelector('.blue').addEventListener('mouseover',function (e){
    e.target.src = '../img/screenshot(6).png'
})
