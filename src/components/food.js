import { useEffect, useState } from "react";
import {UserContext} from "../contexts/UserContext";
import {useContext} from "react";
function Food(props){
    const [eatenquantity,setEatenQuantity]=useState();
    const [message,setMessage]=useState({
        type:"Invisible-msg",
        text:""
    })
    const [food,setFood]=useState([]);
    const[foodInitial,setFoodInitial]=useState({});
    let loggedData=useContext(UserContext);
console.log(loggedData);
console.log(food);

    useEffect(()=>{
        setFood(props.item);
        setFoodInitial(props.item);
        console.log(loggedData);
        console.log(props.item);
    },[props.item]);

    
    function calculateMacros(event){
            if(event.target.value.length!==0){
                let quantity=Number(event.target.value);
                     setEatenQuantity(quantity);
                let copyFood={...food};
                 
                    copyFood.protein=(foodInitial.protein*quantity)/100;
                    copyFood.carbohydrates=(foodInitial.carbohydrates*quantity)/100;
                    copyFood.fat=(foodInitial.fat*quantity)/100;
                    copyFood.fiber=(foodInitial.fiber*quantity)/100;
                    copyFood.calories=(foodInitial.calories*quantity)/100;
                    setFood(copyFood);
            }
            
    }


    function trackFoodItem(){
        let trackItem={
            userId:loggedData.loggedUser.userid,
            foodId:food._id,
            details:{
                protein:food.protein,
                carbohydrates:food.carbohydrates,
                fat:food.fat,
                fiber:food.fiber,
                calories:food.calories

            },
            quantity:eatenquantity

        }

        //  console.log(trackItem);
        fetch("http://localhost:8000/track",{
            method:"POST",
            body:JSON.stringify(trackItem),
            headers:{
                "Authorization":"Bearer "+loggedData.loggedUser.token,
                "Content-Type":"application/json"
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            setMessage({type:"success",text:data.message});
        })
        .catch((err)=>{
            console.log(err);
        })
    }



  return(
    <div className="food">
        
            <div className="food-img">
                <img className="food-image" src={food.image}/>
            </div>

           <h2> {food.name}({food.calories} Kcal for {eatenquantity}G)</h2>
        <div className="nutrient">
            <p className="n-title">Protein</p>
            <p className="n-value">{food.protein}g</p>
        </div>
        <div className="nutrient">
            <p className="n-title">Carbohydrates</p>
            <p className="n-value">{food.carbohydrates}g</p>
        </div>
        <div className="nutrient">
            <p className="n-title">Fat</p>
            <p className="n-value">{food.fat}g</p>
        </div>
        <div className="nutrient">
            <p className="n-title">Fibre</p>
            <p className="n-value">{food.fiber}g</p>
        </div>

        <div className="track-control">
        <input type="number" className="inp" onChange={calculateMacros}  Placeholder="Quantity in Gms"  />
        <button  className="btn" onClick={trackFoodItem}>Track</button>
        </div>
        


        </div>
  )
}
export default Food;