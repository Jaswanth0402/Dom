const form = document.getElementById("form");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const submit =document.getElementById("submit")

let row =null;

    form.addEventListener('submit',e=>{
        e.preventDefault();
        validateform()
       
         
   })

function validateform(){
   
    
    if(validatename()&&validatEmail()&&validatePassword()){
     if(row===null){
        Post()
     }
     else{
      update()
      var crbtn=document.createElement("button")
      crbtn.innerHTML="Submit";
      
      crbtn.setAttribute("class","btn btn-sm btn-success")
      document.getElementById("saveupdate").innerHTML=""
      
      document.getElementById("saveupdate").appendChild(crbtn);
     }  
         
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


 async function Post(){
    const response = await fetch("https://6451f642a2860c9ed4fe7357.mockapi.io/user/Curd",{
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
       const user = await response.json()
      get()
      return user; 
    }
    async function get(){
const response = await  fetch("https://6451f642a2860c9ed4fe7357.mockapi.io/user/Curd")
   const user = await response.json()
   .then(user => {
    let file =user
    console.log(file)   
     let value ="";
    file.forEach(user=>{
   value  += `<tr>
      <td>${user.id}</td>
      <td>${user.Name}</td>
      <td>${user.Email}</td>
      <td>${user.Password}</td>
      <td><button class="delete" onclick ="erase(this)">Delete</button>    <button  onclick ='edit(this)' class="Edit">Edit</button></td>
    </tr>`
    
    })
   
    document.getElementById("store").innerHTML =value
});
   
  }
  get()
async function erase(td){
  rowerase = td.parentElement.parentElement;
  let id = rowerase.cells[0].innerHTML;
  document.getElementById("table").deleteRow(rowerase.rowIndex);
   await fetch("https://6451f642a2860c9ed4fe7357.mockapi.io/user/Curd" + "/"+id, {
        method: 'DELETE',
      })
       .then( res => res.json())
      .then(res => console.log(res)
      )
  
}
let id;
function edit(td){
 
  row = td.parentElement.parentElement;
   id = row.cells[0].innerHTML;
  id =row.cells[0].innerHTML
  Name.value =row.cells[1].innerHTML   
  email.value =row.cells[2].innerHTML   
  password.value =row.cells[3].innerHTML 
  var updatebtn=document.createElement("button")
    updatebtn.innerHTML="Update";
    updatebtn.setAttribute("class", "btn btn-sm btn-success")
    updatebtn.setAttribute("onclick","update()")
    document.getElementById("saveupdate").innerHTML=""
    document.getElementById("saveupdate").appendChild(updatebtn)
  // if(submit.value ==="Update"){
  //   submit.value ="Submit"
  // }
  //  else{
  //   submit.value ="Update"
   
  //  }
  updatevalue()
}
let idvalue;
function updatevalue(){
  idvalue =id
  update()
}

function update(){
   
  let id1 = idvalue
       
       
    fetch("https://6451f642a2860c9ed4fe7357.mockapi.io/user/Curd" + "/" + id1, {
      method: 'PUT',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
    },
      body: JSON.stringify({
       Id:id,
       Name:Name.value,
       Email:email.value,
       Password:password.value
      })
     
    }).then((response) => {
      response.json()
      .then((response) => {
        response
        row.cells[0].innerHTML =id;
        row.cells[1].innerHTML =Name.value   
        row.cells[2].innerHTML =email.value
        row.cells[3].innerHTML = password.value 
      get()
      
      })
     
     
     
    }).catch(err => {
      console.error(err)
    })
}