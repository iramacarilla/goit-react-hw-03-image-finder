import React from 'react'
import Loader from "react-loader-spinner";

const Loading = ({}) => {
    return (
        <div className="col spinner_item p-5" title="Bars">
              <Loader type="Bars" 
              color=" #3f51b5" 
              height={50} 
              width={50}
               />
            </div>
     )
}

export default Loading;