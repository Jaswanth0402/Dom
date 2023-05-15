const form = document.getElementById("form");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");




    form.addEventListener('submit',e=>{
        e.preventDefault();
        validateform()
   })

function validateform(){
   
    
    if(validatename()&&validatEmail()&&validatePassword()){
        fetch("https://6451f642a2860c9ed4fe7357.mockapi.io/user/Curd",{
        method:"POST",
     
        body : JSON.stringify({
            Name:Name.value,
            Email:email.value,
            Password:password.value

        }),


        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
       
        
       }) 
       .then(response => response.json())
       .then(json => console.log(json));    
       Name.value="";
       email.value ="";
       password.value="";

           
    } 
    else {
      return false
    }
        
     
    
    
}
let toggle = document.getElementById("show")

toggle.addEventListener("click",function(){
 
  if(password.type ==='password'){
    password.type ="text"
   
  }
  else{
    password.type ="password"
    }
    toggle.classList.toggle("fa-eye");
})
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

  
