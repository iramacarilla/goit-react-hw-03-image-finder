/*import React from 'react'

const Modal = ({children}) => {
    return (
        <div className="Overlay">
     <div className="Modal">
     {children}
      </div>
    </div>
    )
}

export default Modal*/




import React, {Component} from 'react'

export default class Modal extends Component {

   
    
    render (){
    return (
    <div className="Overlay">
     <div className="Modal">
       {this.props.children}
      </div>
    </div>
    )
}
}

 
