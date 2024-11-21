 
 import React from "react";
 
 const Slidingskills = ({assetsArray}:{assetsArray: Array<{name:string, image:string}>}) => {
    const Items = ({i,img}:{i:number,img:{name:string, image:string}}) => {
      return(
        <div className="iteminslider">
          <img alt={`Item ${i}`}  src={img.image}></img>
        </div>
      )
    }
    const items = [];
  
    for (let k = 0; k < assetsArray.length; k++) {
      items.push(<Items key={k} i={k} img={assetsArray[k]}  />);
    }
    return(
      <>
      {items}
  
      </>
    );
  }

  export default Slidingskills