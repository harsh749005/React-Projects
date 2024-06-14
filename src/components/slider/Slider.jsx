import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import data from './data'
import './style.css'
function Slider(){
    
    const [value,setvalue] = useState(0);
    const decrementCount = () => {
        
        setvalue(prevValue => {
            if (prevValue <= 0) {
                return  data.length-1;
            } else {
                return  prevValue - 1;
            }
        });
    };
    const incrementCount = () => {
        
        setvalue(prevValue => {
            if (prevValue >= data.length -1) {
                return  0;
            } else {
                return  prevValue+1;
            }
        });
    };
        return(
        <div>
            <div className="image-container-slider">
                <div onClick={decrementCount} className='next'><FaAngleRight /></div>
                <div onClick={incrementCount} className='previous'><FaAngleLeft /></div>
                
                <img className="image" src={data[value].url} alt="" />
                
                
                    </div>
        </div>
);
}
export default Slider;