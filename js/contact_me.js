var myDataRef = new Firebase('https://userappruner.firebaseio.com/');
$('#send').click(function(){
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var msg = $('#message').val();
    if(name != "" && email!= "" && phone != "" && msg != "" )
    {
        myDataRef.push({name: name, email: email, phone:phone, msg:msg});
        alert("you have sent message to zhanglee666@gmai.com");

    }
    else{
        alert("Could you please fill in correctly information! Thank you");
    }

});


