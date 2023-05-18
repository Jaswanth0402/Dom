"use strict"
const obj =[{
    firstname:"jaswanth",
    Lastname:"Kumar.J.G",
    DOB :'04-02-2000',
    Email:'jgjaswanthjk6@gmail.com'
},
{
    firstname:"jaswanth",
    Lastname:"Kumar.J.G",
    DOB :'04-02-2000',
    Email:'jgjaswanthjk6@gmail.com'
}
]

function element(ele){
   if(ele?.Email ==="jgjaswanthjk6@gmail.com") {
    document.getElementById("list").innerHTML += "<li>"+ele.firstname+" "+ele.Lastname+"</li>"
   }
}
obj.filter(element,(ele)=>{
  document.getElementById("list").innerHTML += "<li>"+ele.firstname+" "+ele.Lastname+"</li>"+"<li>"+ele.DOB+"</li>"+"<li>"+ele.Email+'</li>'
})

localStorage.setItem('obj',JSON.stringify(obj))

// localStorage.clear()
const obj1=JSON.parse(localStorage.getItem('obj'))
obj1.map(ele=>{
  document.getElementById("list").innerHTML += "<li>"+"Name:"+ele.firstname+" "+ele.Lastname+"</li>"+"<li>"+"D.O.B:"+ele.DOB+"</li>"
})
console.log(obj1)

sessionStorage.setItem("obj",JSON.stringify(obj))
const obj2 =JSON.parse(sessionStorage.getItem("obj"))

console.log(obj2)
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
 
    if (decodedCookie.indexOf(name) == 0) {
      console.log(name.length, decodedCookie.length)
      return decodedCookie.substring(name.length, decodedCookie.length);
      
    }
  
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:" ,"");
     if (user != "" && user != null) {
       setCookie("username", user, 60);
     }
  }
}
// console.log(decodedCookie);
// let ca = decodedCookie.split(' ');
// console.log(ca)
// for(let i = 0; i < ca.length; i++) {
//   let c = ca[i];
//   while (c.charAt(0) == ' ') {
//     c = c.substring(1);
  
//   }
//   console.log(c)