import { useState } from 'react';
import data from './data'
import './style.css'

function Load(){
    const [VisibleItems,setVisibleItems] = useState(2);
    function LoadMore() {
        setVisibleItems(prevVisibleItems => Math.min(prevVisibleItems + 2, data.length));
    }
    
    
    return(
    <>
            <div className="main-container">
                <div className="content">
        {
            data.slice(0,VisibleItems).map((item,index)=>(
                
                    <div  key={index} className="image-container">
                        <img className='image' src={item.url} alt="" />
                    </div>
            ))

            }
            </div>
            <div className="status">
            {VisibleItems < data.length ? 
                <button className="LoadMore" onClick={LoadMore}>Load More</button>
            : <p>All Products are loaded</p>}
            </div>
        </div>
    </>);
}

export default Load;