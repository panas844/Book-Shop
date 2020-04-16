var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Search Form
function validateSearchForm() {
    var x = document.forms["searchForm"]["fname"].value;
    // if (x == "") {
    //   alert("Name must be filled out");
    //   return false;
    // }
    if (x==null || x=="" || x.length < 3) {
        
        document.getElementById("search1").className="form-control mr-sm-2 is-invalid"
    } else {
        document.getElementById("search1").className="form-control mr-sm-2 is-valid"
       

    }
  }




//   Login Form
// maybe no need. For real time check
function validateEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var x = document.forms["loginForm"]["email"].value;
     if (!x.match(mailformat)|| x.value==="" ){
        document.forms["loginForm"]["email"].className="form-control is-invalid"   
        document.getElementById("loginButton").disabled = true;
    } else {
        document.forms["loginForm"]["email"].className="form-control is-valid"
        document.getElementById("loginButton").disabled = false;
       
     }
    
}

// function validatePassword(){
//     var y = document.forms["loginForm"]["password"].value;
//      if ( y.value==="" ){
//         document.forms["loginForm"]["password"].className="form-control is-invalid" 
//         document.getElementById("loginButton").disabled = true;
//      } else {
//         document.forms["loginForm"]["email"].className="form-control is-valid"
//         document.getElementById("loginButton").disabled = false;
//         return true
//      }
    
// }


// function validateLoginForm(){
//     var y = document.getElementById("exampleInputPassword1").value
//     console.log(y)
//          if ( y.value==""){
//             document.getElementById("exampleInputPassword1").className="form-control is-invalid" 
//             document.getElementById("loginButton").disabled = true;
//             return false
//          } else {
//             document.forms["loginForm"]["email"].className="form-control is-valid"
//             document.getElementById("loginButton").disabled = false;
           
//          }
// }

  function validateLoginForm() {
    var x = document.forms["loginForm"]["email"].value;
    var y = document.forms["loginForm"]["password"].value;
   
    if (x==null || x=="") {
        if(y==null || y==""){
            document.forms["loginForm"]["email"].className="form-control is-invalid"
            document.forms["loginForm"]["password"].className="form-control is-invalid"
            return false
        } else {
                    // alert("Email must be filled");
        document.forms["loginForm"]["email"].className="form-control is-invalid"
        document.forms["loginForm"]["password"].className="form-control is-valid"
        return false;
        }
    } else if (!x.match(mailformat)) {
        document.forms["loginForm"]["email"].className="form-control is-invalid"
        document.getElementById("emailFeedback").innerHTML="Please type a valid email"
        return false
    } else if (y==null || y=="") {
        // alert("Password must be filled");
        document.forms["loginForm"]["password"].className="form-control is-invalid"
        return false;
    }
  }


// Sign Up Form

function checkFormSignUp(form) { 
    
    
    var email = form.emailSignUp.value
    var password1 = form.password1.value; 
    var password2 = form.password2.value; 
    var province = form.province.value

    // email check
    if(email.match(mailformat)){
        form.emailSignUp.className="form-control is-valid"
        if (password1!=="" && password1==password2 && province!=="Choose..."){
            form.password1.className="form-control is-valid"
            form.password2.className="form-control is-valid"
            return true;
        } else if(password1 == ''){
            form.password1.className="form-control is-invalid"
            return false;
        } else if(password2 == ''){
            form.password1.className="form-control is-valid"
            form.password2.className="form-control is-invalid"
            return false;
        } else if (password1 != password2){
            form.password1.className="form-control is-valid"
            form.password2.className="form-control is-invalid" 
            return false; 
        } else if (province =="Choose...")
        form.emailSignUp.className="form-control is-valid"
        form.password1.className="form-control is-valid"
        form.password2.className="form-control is-valid"
        form.province.className="form-control is-invalid"
        return false; 
        
    } else {
        document.forms["formSignUp"]["emailSignUp"].className+=" is-invalid"
    return false;
    }
} 

// function checkPasswordSignUp(form){
//     password1 = form.password1.value; 
//     password2 = form.password2.value; 
//     // If password not entered 
//     if (password1 == '') {
//         form.password1.className+=" is-invalid"
//         document.forms["formSignUp"]["password1"].className+=" is-invalid"
//     return false;
          
//     // If confirm password not entered 
//     }else if (password2 == '') {
//         form.password2.className+=" is-invalid"
//         return false;  
//     // If Not same return False.     
//      } else if (password1 != password2) { 
//         alert ("\nPassword did not match: Please try again...")
//         form.password2.className+=" is-invalid" 
//         return false; 
//     } 

//     // If same return True. 
//     else{ 
//         alert("Password Match: Welcome to The BookStore") 
//         return true; 
//     } 
// }
