import {UserContext} from "../contexts/UserContext";
import {useContext,useState,useEffect} from "react";
import Food from "./food";
import Header from "./Header";



function Track(){
    const [foodItems,setFoodItems]=useState([]);
    const [food,setFood]=useState(null);

    useEffect(()=>{
        console.log(food);
    })

    const loggedData=useContext(UserContext);



    function searchFood(event){
        if(event.target.value.length!==0)
        {
       fetch(`http://localhost:8000/foods/${event.target.value}`,{
        method:"GET",
        headers:{
            "Authorization":"Bearer "+loggedData.loggedUser.token
        }
    })
    .then((response)=>response.json())
    .then((data)=>{
        if(data.message===undefined){
            setFoodItems(data);
        }
        else{
            setFoodItems([]);
        }
        
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  else{
    setFoodItems([]);
  }

    }
    function displayItem(id){
         console.log(id);
    }
    return(
        <div >
            <div className="tarck-con">
         <Header/>
         <input className="search-inp" onChange={searchFood} type="search" placeholder="Search Food Item"  />
         </div>
        
       <section className="container track-container">
        
      
        
        <div className="search">
           

 
       {
        foodItems.length!==0?( <div className="search-results">
        {
            foodItems.map((item)=>{
                return(
                    <p className="item" onClick={()=>{
                        setFood(item)
                    }} key={item._id}>{item.name}</p>

                )
            })
        }
   </div>):<h2  className="tarck-head">Let's Search a Food which you want</h2>
        
       }
          
        </div>
        {
             food!==null?(
             <Food item={food}/>
             ):null
        }
       

</section>
</div>
    )
}
export default Track;