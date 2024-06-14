import { useState } from 'react';
import './style.css'
function TreeMenu(){
    const arr = [1,2,3,4];
    const [element,setElement] = useState([0]);
    const [disable,setdisable] = useState(false);
    function CreateElement(){
        let i = 0;
        const newElement = <div className='item'><span>{arr[i+1]}</span><span className='increment'>+</span></div>
        setElement(preVious =>[...preVious,newElement]);
    }
    return(
        <>
            <div className="main-containier">
            {element.map((item,index)=>(
                <div className="item">
                    <span>{index === arr.length ?setdisable(true):arr[index]}</span>
                    <span onClick={CreateElement} style={{display:disable === true ? "none":"block"}} className='increment'>+</span>
                </div>
            ))}
            </div>
        </>
    )
}
export default TreeMenu;