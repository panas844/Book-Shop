
// Search Form
function validateSearchForm() {
    var x = document.forms["searchForm"]["fname"].value;
    // if (x == "") {
    //   alert("Name must be filled out");
    //   return false;
    // }
    if (x==null || x=="" || x.length < 3) {
        
        document.getElementById("search1").className+=" is-invalid"
        return false;
    }
  }

//   Login Form

  function validateLoginForm() {
    var x = document.forms["loginForm"]["email"].value;
    var y = document.forms["loginForm"]["password"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (x == "") {
    //   alert("Name must be filled out");
    //   return false;
    // }
    if (x==null || x=="") {
        if(y==null || y==""){
            document.forms["loginForm"]["email"].className+=" is-invalid"
            document.forms["loginForm"]["password"].className+=" is-invalid"
            return false
        } else {
                    // alert("Email must be filled");
        document.forms["loginForm"]["email"].className+=" is-invalid"
        return false;
        }
    } else if (!x.match(mailformat)) {
        document.forms["loginForm"]["email"].className+=" is-invalid"
        document.getElementById("passwordFeedback").innerHTML="Please type a valid email"
        return false
    } else if (y==null || y=="") {
        // alert("Password must be filled");
        document.forms["loginForm"]["password"].className+=" is-invalid"
        return false;
    }
  }

// function ValidateEmail(inputText)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
//     document.loginForm.email.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.loginForm.email.focus();
// return false;
// }
// }


// Sign Up Form

function checkEmailSignUp(form) { 
    
    mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = form.emailSignUp.value
    province = form.province.value

    // email check
    if(email.match(mailformat))
{
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    return false;
    }
} 

function checkPasswordSignUp(form){
    password1 = form.password1.value; 
    password2 = form.password2.value; 
    // If password not entered 
    if (password1 == '') {
        alert ("Please enter Password"); 
        console.log("sdsd")
          
    // If confirm password not entered 
    }else if (password2 == '') {
        alert ("Please enter confirm password"); 
          
    // If Not same return False.     
     } else if (password1 != password2) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 

    // If same return True. 
    else{ 
        alert("Password Match: Welcome to The BookStore") 
        return true; 
    } 
}
