function adduser(event){
    event.preventDefault()
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const password=document.getElementById('pass').value
    const confirmpassword=document.getElementById('conf').value
    const obj={
        name,
        email,
        password,
        confirmpassword
    }
    console.log(obj)
    axios.post("http://localhost:4000/adduser",obj)
    showListofRegisteredUser(user)
    .then((response)=>{
        // console.log(response)
    })
    .catch(err=>{
        console.log(err)
    })
}


window.addEventListener('DOMContentLoaded',() =>{
    axios.get("http://localhost:4000/AllUsers")
    .then(result =>{
        console.log(result.data.response)
        // console.log(userDetails)
        for(let i=0;i<result.data.response.length;i++)
        {
            let name = result.data.response[i].name
            let email = result.data.response[i].email;
            let password=result.data.response[i].password
            let id = result.data.response[i].id;
            showListofRegisteredUser(result.data.response[i])
        }
        
    })
    .catch(err =>console.log(err))
})
function showListofRegisteredUser(user)
{   
    const parentNode = document.getElementById('userlist');
    const createNewUserHtml = `<li id='${user.id}'>
    <style>
    table, th, td {
      border: 2px solid black;
      border-collapse: collapse;
    }
    </style>
    <table style="width:100%">
    <tr>
      <th>Username</th>
      <th>Email</th> 
      <th>Password</th> 
  
    </tr>
    <tr>
    <td>${user.name}</td>
    <td>${user.email} </td>
    <td>${user.password}</td><br><button onclick=deleteUser('${user.id}')>Delete</button>
      <button onclick=EditUser('${user.name}','${user.email}','${user.password}','${user.id}')>Edit</button><br><br>
    
    </tr>
  
  </table>
                             
                        </li>`
    // console.log(createNewUserHtml)
    parentNode.innerHTML = parentNode.innerHTML + createNewUserHtml;
    // console.log(parentNode.innerHTML)
}

const deleteUser=async(userid)=> {
    try{
   await axios.delete(`http://localhost:4000/delete/${userid}`)
        removeItemFromScreen(userid)
    }
    catch{(err)=>{
        console.log(err)
    }
    //localStorage.removeItem(user)
   
}
}

function removeItemFromScreen(userid){
    const parentNode = document.getElementById('lb');
    const elem = document.getElementById('details')
    parentNode.removeChild(elem);
}
function EditUser(Username,email,password,userid) 
{
   name.value=name;
   email.value=email;
   password.value=password;
   deleteUser(userid);
}