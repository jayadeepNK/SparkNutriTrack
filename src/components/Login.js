import {Link,useNavigate} from 'react-router-dom';
import {useState,useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
function Login(){
  const loggedData=useContext(UserContext);

  
    const navigate=useNavigate();

    const[userCreds,setUserCreds]=useState({
        email:"",
        password:""
    })

    const [message,setMessage]=useState({
        type:"invisible-msg",
        text:""
    })

    function handleInput(event){
        setUserCreds((prevState)=>{
      return {...prevState,[event.target.name]:event.target.value}
        })
    }



     function handleSubmit(event){
        event.preventDefault();
        
        fetch("http://localhost:8000/login",{
            method:'POST',
            body:JSON.stringify(userCreds),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
              if(response.status===404){
                setMessage({type:"error",text:"Username or Email Doesn't Exist"})
              }
              else if(response.status===403){
                 setMessage({type:"error",text:"Incorrect Password"})
              }
             
              
              
           
              setTimeout(()=>{
                setMessage({type:"invisible-msg",text:''})
              },5000)


              return response.json();
        })
        .then((data)=>{
         
            if(data.token!==undefined){
                localStorage.setItem("nutrify-user",JSON.stringify(data));
                loggedData.setLoggedUser(data);
                 navigate("/home");
            }
            
            
        })
        .catch((err)=>{
            console.log(err);
        })
     }
    return(
      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Login ToFitness</h1>
           
            <input className="inp" required onChange={handleInput} type="email" placeholder="Enter Email" name="email" value={userCreds.email}/>
            <input className="inp" required maxLength="8" onChange={handleInput} type="password" placeholder="Enter password" name="password" value={userCreds.password}/>
            <button className="btn">Login</button>
            <p>Don't have an Account ? <Link to="/register">Register Now</Link></p>
            <p className={message.type}>{message.text}</p>
        </form>

      </section>
    )

}
export default Login;