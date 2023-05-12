const form = document.getElementById("form");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const click =document.getElementById('click');



    form.addEventListener('submit',e=>{
        e.preventDefault();
        validateform()
   })

function validateform(){
   
    
    if(validatename()&&validatEmail()&&validatePassword()){
        console.log(document.getElementById("name").value);
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("pass").value);
            
            myfunction();
    } 
    else {
      return false
    }
        
     
    
    
}

function validatename(){
    const formname= Name.value.trim()
    let nameboo =true
    if(formname === ""){
        setError(Name,'Name must be filled');
        
        nameboo =false
          
    }
    else{
        setSuccess(Name,'');
        return nameboo
    }
    function setError(input,message){
        const frommanage = input.parentElement;
        const small =frommanage.querySelector("p");
    
        small .innerText = message;
        small.style.color = "red"
   
     }
     function setSuccess(input,message){
        const frommanage = input.parentElement;
       const small =frommanage.querySelector("p");
    
       small .innerText = message;
       
    
    }
}    
function validatEmail(){
   let emailboo =true;
    const formemail= email.value.trim() 
    if(formemail === ""){;
        emailboo =false
        setError(email,'email must be filled');
        
   }
   else if(!validemail(formemail)){
    emailboo =false;
         setError(email,'please fill valid email address');
        
   }
   else{
    
       setSuccess(email,"");
       return emailboo
   }
   function validemail(email){
    let Email =/^([A-za-z0-9_.])+\@([a-z])+\.([a-z])+$/;
   return Email.test(email);

}
function setError(input,message){
    const frommanage = input.parentElement;
    const small =frommanage.querySelector("p");
    small .innerText = message;
    small.style.color = "red"

 }
 function setSuccess(input,message){
    const frommanage = input.parentElement;
   const small =frommanage.querySelector("p");
   small .innerText = message;
   small.style.color = "green"

}
}
 function validatePassword(){
    const formpass= password.value.trim() 
     let pass =true
    if(formpass === ""){
        pass =false
        setError(password,'password must be filled');
     
  }
  else if(!validpass(formpass)){
    pass =false
        setError(password,'please fill valid password ');
      
  }

  else{
     
       setSuccess(password,'');
     
    return pass  

  }
  function validpass(password){
    var Pass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
   return Pass.test(password);
}
function setError(input,message){
    const frommanage = input.parentElement;
    const small =frommanage.querySelector("p");
 
    small .innerText = message;
    small.style.color = "red"

 }
 function setSuccess(input,message){
    const frommanage = input.parentElement;
   const small =frommanage.querySelector("p");

   small .innerText = message;
   small.style.color = "green"

}
 }

  function myfunction(){
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

    
}
