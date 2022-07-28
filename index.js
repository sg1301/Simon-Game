 var color=['green','red','yellow','blue'];
 var index=0;
 var temp=[];
 var level=0;
 var actual=[];
$(document).keypress(function(event){

    actual=[];
    temp=[];
    level=0;
    $('h1').text("level "+level); 
    generate();
});
function generate()
{
    var rd=Math.floor((Math.random()*4)+1);
  //  console.log(rd);
 //   console.log($('.green'));    // we have to add dot before class name for accessing element having given class name
    var ad=new Audio('sounds/'+color[rd-1]+'.mp3');
    $("."+color[rd-1]).addClass('pressed');
   // console.log($("."+color[rd-1]));
    setTimeout(() => {
        $("."+color[rd-1]).removeClass('pressed');
    },100);
   // var doc=document.getElementsByClassName(color[rd-1])[0];
   // console.log(doc);
   // doc.classList.add('pressed');
   // setTimeout(() => {
     //   doc.classList.remove('pressed');
   // },100);
    // setTimeout(function() {
    //     doc.classList.remove('pressed');
    //   }, 1000);
    ad.play();
    actual.push(rd-1);
    index=0;
    temp=[];
}
$('.green').click(function(){
    temp.push(0);
    check();
})
$('.red').click(function(){
    temp.push(1);
    check();
})
$('.yellow').click(function(){
    temp.push(2);
    check();
})
$('.blue').click(function(){
    temp.push(3);
    check();
})
function check()
{
    if(temp[index]!=actual[index])
   {
    $('h1').text('GameOver !! Press Any Key To Start');
    var ad=new Audio();
    ad.play('sounds/wrong.mp3');
   }
   else if(temp[index]==actual[index]){
            index++;
     } 
     if(index==actual.length)
     {
         level++;
           $('h1').text("level "+level);   // increase level
           generate();
     }
   
}