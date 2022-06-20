// $(document).ready(function(){
//     $("#contactus-submit").click(function(){
//     var r= $('<i class="fa fa-spinner fa-spin"></i>');
//     $("#contactus-submit").html(r);
//     $("#contactus-submit").append(" Sending...");
//     $("#contactus-submit").attr("disabled", true);
    
    
//     setTimeout(function(){
//     $("#contactus-submit").attr("disabled", false);
//     $("#contactus-submit").html('Send');
    
//     }, 3000);
    
    
//     });
//     });


$(document).ready(function(){
$("#error").click(function(e){ 
    e.preventDefault();


    console.log("ifwala");
    var a=$("#name").val();
    if(a=="ashmita"){
        $("#non").click()

    }
    else{
        alert("field empty. please check")
    }
    console.log(a);
  


});


});



    