import {UserContext} from "../contexts/UserContext";
import {useContext} from "react";
import { useNavigate ,Link} from "react-router-dom";
function Header(){
    const loggedData=useContext(UserContext);
  const navigate=useNavigate();
    function logout(){
        localStorage.removeItem("nutrify-user")
        loggedData.setLoggedUser(null);
        navigate("/login");
    }
       return(
        <div className="header-con">
            <h1 style={{color:"blue",fontFamily:"sans-serif",marginLeft:"15px"}}>SparkNutriTrac</h1>
            <ul  className="header-ul">
                
            <Link to="/home"> <li>Home</li></Link>
               <Link to="/track"> <li>Track</li></Link>
               <Link to="/diet"> <li>Diet</li></Link>
                
            </ul>
            <button class="btn header-btn" onClick={logout}>Log out</button>
        </div>
       )
}
export default Header;