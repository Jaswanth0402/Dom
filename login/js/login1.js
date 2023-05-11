const form = document.getElementById("form");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const click =document.getElementById('click');



    form.addEventListener('submit',e=>{
        e.preventDefault();
     if(!validateform()){
        
     } 
     else {
        console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("pass").value);
        e.preventDefault();
        myfunction();
     }
       
    // validatEmail();
    // validatePassword();
    // validatename();
    // myfunction();
        // if(!validateform()){
        //     return false;
        // }
        // else{
        // myfunction();
        // }
    })
//   });
  


// form.addEventListener('submit',e =>{
//     e.preventDefault();
//     validateform( );
//     myfunction();
     
    
// });
function validateform(){
    // if(!validatename()&&!validatEmail()&&!validatePassword()){
    //   return false;
    // }
    // // else if(!validatEmail()){
    //  return false;
    // }
    // else if(!validatePassword()){
    //   return false;
    // }
    
       
        
     
    const formname= Name.value.trim() 
    const formemail= email.value.trim() 
    const formpass= password.value.trim() 
    let success = true;
    if(formname === ""){
        success = false;
        setError(Name,'Name must be filled');
        // return false;
          
    }
    else{
        setSuccess(Name,'');

    }
    if(formemail === ""){
        success = false;
         setError(email,'email must be filled');
        //  return false;
    }
    else if(!validemail(formemail)){
        success = false;
          setError(email,'please fill valid email address');
        //   return false;
    }
    else{
        setSuccess(email,"");
    }
    if(formpass === ""){
        success = false;
          setError(password,'password must be filled');
        //   return false;
    }
    else if(!validpass(formpass)){
        success = false;
          setError(password,'please fill valid password ');
        //   return false;
    }

    else{
       
         setSuccess(password,'');
        // myfunction();/
        

    }
    
    return success;
    
    
    // if((!formname === "")&&validemail(formemail)&&validpass(formpass)){
    //    return myfunction();
    // }
    function validemail(email){
        let Email =/^([A-za-z0-9_.])+\@([a-z])+\.([a-z])+$/;
       return Email.test(email);
    
    }
    function validpass(password){
        var Pass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
       return Pass.test(password);
    }
    function setError(input,message){
       const frommanage = input.parentElement;
       const small =frommanage.querySelector("p");
    //    frommanage.className ='form-manage error';
       small .innerText = message;
       small.style.color = "red"
    //   return false;
    }
    function setSuccess(input,message){
        const frommanage = input.parentElement;
       const small =frommanage.querySelector("p");
    //    frommanage.className ='form-manage error';
       small .innerText = message;
       small.style.color = "green"
    //    return true;
    }
    
    
}

// function validatename(){
//     const formname= Name.value.trim()
//     if(formname === ""){
//         setError(Name,'Name must be filled');
//         // return false;
          
//     }
//     else{
//         setSuccess(Name,'your name registered');

//     }
//     function setError(input,message){
//         const frommanage = input.parentElement;
//         const small =frommanage.querySelector("p");
//      //    frommanage.className ='form-manage error';
//         small .innerText = message;
//         small.style.color = "red"
//     //    return false;
//      }
//      function setSuccess(input,message){
//         const frommanage = input.parentElement;
//        const small =frommanage.querySelector("p");
//     //    frommanage.className ='form-manage error';
//        small .innerText = message;
//        small.style.color = "green"
//     //    return true;
//     }
// }    
// function validatEmail(){
//     const formemail= email.value.trim() 
//     if(formemail === ""){
//         setError(email,'email must be filled');
//         // return false;
//    }
//    else if(!validemail(formemail)){
//          setError(email,'please fill valid email address');
//         //  return false;
//    }
//    else{
//        setSuccess(email,"valid email");
//    }
//    function validemail(email){
//     let Email =/^([A-za-z0-9_.])+\@([a-z])+\.([a-z])+$/;
//    return Email.test(email);

// }
// function setError(input,message){
//     const frommanage = input.parentElement;
//     const small =frommanage.querySelector("p");
//  //    frommanage.className ='form-manage error';
//     small .innerText = message;
//     small.style.color = "red"
// //    return false;
//  }
//  function setSuccess(input,message){
//     const frommanage = input.parentElement;
//    const small =frommanage.querySelector("p");
// //    frommanage.className ='form-manage error';
//    small .innerText = message;
//    small.style.color = "green"
// //    return true;
// }
// }
//  function validatePassword(){
//     const formpass= password.value.trim() 

//     if(formpass === ""){
//         setError(password,'password must be filled');
//       //   return false;
//   }
//   else if(!validpass(formpass)){
//         setError(password,'please fill valid password ');
//       //   return false;
//   }

//   else{
     
//        setSuccess(password,'valid password');
//       // myfunction();/
      

//   }
//   function validpass(password){
//     var Pass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//    return Pass.test(password);
// }
// function setError(input,message){
//     const frommanage = input.parentElement;
//     const small =frommanage.querySelector("p");
//  //    frommanage.className ='form-manage error';
//     small .innerText = message;
//     small.style.color = "red"
// //    return false;
//  }
//  function setSuccess(input,message){
//     const frommanage = input.parentElement;
//    const small =frommanage.querySelector("p");
// //    frommanage.className ='form-manage error';
//    small .innerText = message;
//    small.style.color = "green"
// //    return true;
// }
//  }

  function myfunction(){


    // const Name = document.getElementById("name");
    // const email = document.getElementById("email");
    // const password = document.getElementById("pass");
    // const formname= Name.value.trim() 
    // const formemail= email.value.trim() 
    // const formpass= password.value.trim() 
    
    
    var list1 =[]; 
    var list2 =[]; 
    var list3 =[]; 
    var n=1;
    var x=0;
    var table =document.getElementById("mytable");
     var row =table.insertRow(n);
     list1[x] = document.getElementById("name").value;
     list2[x] = document.getElementById("email").value;  
     list3[x] =document.getElementById("pass").value;
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      
      cell1.innerHTML =list1[x];
      cell2.innerHTML =list2[x];
      cell3.innerHTML =list3[x];
      
     
        n++;
    x++;
    
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("pass").value ="";
// document.getElementById("fill").innerHTML =""
// document.getElementById("alret").innerHTML =""
// document.getElementById("inncorrect").innerHTML=""
    
}
