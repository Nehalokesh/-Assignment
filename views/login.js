

function login(e){
    e.preventDefault();

    const loginDetails = {
        email:e.target.email.value,
        password:e.target.password.value
    }
    axios.post("http://localhost:4000/login",loginDetails)
    .then(response=>{
        window.location="usermanagement.html"
        })
    .catch(err =>{
        console.log(err)
        alert("Too many request please try again after 24 hours")
        
    });
    e.target.email.value="";
    e.target.password.value="";
}