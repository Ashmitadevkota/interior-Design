$(document).ready(function (){
 $("#increase").click(function(){
 var count= $("#incid").val();
 accessible(count);
 });

 function accessible(key){
     if (key==1 ){   
           
        $("#unknown").val(parseInt( $(".aces").css("font-size")));
        $(".aces").css({"font-size":"23px"});
        key++;
        $("#incid").val(key);
        
     }
     else if(key==2 ){
        $(".aces").css({"font-size":"30px"});
        key++;
        $("#incid").val(key);
     } 
 }


 $("#decrease").click(function(){
   var count= $("#decid").val();
   acce(count);
   });
  
   function acce(key){
       if (key==1 ){   
             
          $("#unknown").val(parseInt( $(".aces").css("font-size")));
          $(".aces").css({"font-size":"15px"});
          key++;
          $("#decid").val(key);
          
       }
       else if(key==2 ){
          $(".aces").css({"font-size":"8px"});
          key++;
          $("#decid").val(key);
       }
   }

 $("#grayscale").click(function(){
$("html").css({"filter": "grayscale(100%)"});
 });

$("#reset").click(function(){
$("html").css({"filter": "grayscale(0%)"});
});

$("#invert").click(function(){
    $("html").css({"filter": "invert(1)"});
    });

// $("#invertreset").click(function(){
//         $("body").css({"filter": "invert(0)"});
//         });

});


  
   
