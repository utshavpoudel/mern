import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
            <div className="top">
                <div
  className="lefttop"
  style={{
    backgroundColor: props.available ? "green" : "red",
  }}
>
  {props.available ? "Available" : "Not Available"}
</div>

 

              <div className="righttop">{props.price}   <Bookmark /></div>
    
          
            </div>
    
             <div className="center">
              <img src={props.image} alt="" />
              <h3>{props.name}</h3>
              <h4>{props.role}</h4>
              <span>{props.extra}</span>
              <h4>{props.description}</h4>
             </div>
    
             <div className="bottom">
    
              <button>view profile</button>
    
    
             </div>
    
    
    
    
          </div>
  )
}

export default Card