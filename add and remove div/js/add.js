
function add(){
 let a=  document.createElement ("div");
  a.className ="remove"
  a.style.display ="inline-flex "
  a.style.columnGap ="1px"
  a.innerHTML ='<textarea name="" id="" cols="30" rows="5"></textarea><button style="background-color:rgb(244, 4, 4);width: 50px;" id="click1" onclick ="remove(this)">-</button>';
  document.getElementById("addremove").appendChild(a); 
}
function remove(input){
 input.parentNode.remove();
}
