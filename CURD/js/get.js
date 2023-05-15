

fetch("https://6451f642a2860c9ed4fe7357.mockapi.io/user/Curd")
   
   
    .then(response => response.json())
    .then(json => {
          let file =json
          console.log(file)   
           let value ="";
          file.forEach(user=>{
         value  += `<tr>
            <td>${user.id}</td>
            <td>${user.Name}</td>
            <td>${user.Email}</td>
            <td>${user.Password}</td>
            <td><button class="delete" onclick="erase(${user.id})">Delete</button>    <button onclick="update(${user.id},${user})" class="Edit">Edit</button></td>
          </tr>`
          
          })
          
          document.getElementById("store").innerHTML =value
});

async function erase(id){
    
    fetch("https://6451f642a2860c9ed4fe7357.mockapi.io/user/Curd" + "/"+id, {
        method: 'DELETE',
      })
      .then ( res => res.json())
      .then(res => console.log(res))
    
}
function update(id){
    fetch("https://6451f642a2860c9ed4fe7357.mockapi.io/user/Curd" + "/" + id, {
      method: 'PUT',
      body: JSON.stringify({
       Name:data.Name,
       Email:data.Email,
       Password:data.Password
      })
    }).then((response) => {
      response.json()
      .then((response) => {
        console.log(response);
      })
    }).catch(err => {
      console.error(err)
    })}