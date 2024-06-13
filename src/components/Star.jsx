
import { FaStar } from "react-icons/fa";
import './style.css';

function Star(){
   
    const array = [1,2,3,4,5];
    function changeBackground(e){
        e.target.style.backgroundColor = 'wheat';
        e.target.style.color = 'black';
        // console.log(array);
        

    }
    function defaultColor(e){
        e.target.style.backgroundColor = 'orange';
        e.target.style.color = 'white';
    }
    return (
        <div className="main">
            
            {array.map((value,_,array)=>(
                // <div className="main1" onMouseOver={()=>changeBackground(value,array)} onMouseLeave={defaultColor}></div>
                <FaStar style={{fontSize:"6em",cursor:"pointer",backgroundColor:"orange",color:"white"}} onMouseOver={changeBackground} onMouseLeave={defaultColor}/>

))}
        </div>
    )
}

export default Star;