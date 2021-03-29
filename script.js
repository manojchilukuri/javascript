var inputval = document.getElementsByClassName("data");
var errMsg = document.getElementsByClassName("error_msg");

var textOnlyExp = /^([a-zA-Z]+)$/;
var telExp = /^([0-9]{10})$/;
var emailExp = /^([a-zA-Z0-9\.-]+)([@])([a-zA-Z0-9-]+)([a-z]{2,8})(.[a-z]{2,8})?$/;

// validation
function validation(){


    function err(index, msg){

        errMsg[index].innerText = msg ;
        errMsg[index].style.visibility = "unset" ;
        inputval[index].style.borderColor = "red" ;
        inputval[index].style.baground = "#e8e8e8" ;


    }
    // multiple input enpty
    if(inputval[0].value == "" && inputval[1].value == "" && inputval[2].value == "" ){

        err(0, "please enter name");
        err(1, "please phone number");
        err(2, "please enter email");
    
        return false;
    } 
    // 2nd 3rd empty
    if( inputval[1].value == "" && inputval[2].value == "" ){

        err(1, "please phone number");
        err(2, "please enter email");
    
        return false;
    }   
    // first input  
    if(inputval[0].value == "" ){
        // first error msg
        err(0, "please enter name");
    
        return false;
     }
     else if (!textOnlyExp.test(inputval[0].value)){
             err(0, "pls enter text");

        return false;
    }
    
     if (inputval[1].value == "" ){
        //  second error msg  
        err(1, "please phone number");
    
        return false;
    }
     // 10 dig number
    else  if (!telExp.test(inputval[1].value)){
        err(1, "pls enter 10 dig");

        return false;
    }
   if (inputval[2].value == ""){
        // third error msg   
        err(2, "please  email");
    
        return false;
    }

    else if (!emailExp.test(inputval[2].value)){
        err(2, "pls email")

        return false;
    }
   
}