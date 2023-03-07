// import React from 'react'
import "./preview.css"
import ProductCard from "../shopComponent/shop.component"
import { Link } from "react-router-dom"

const PreviewComponent = ({theArr, theTitle}) => {

  return (
    <>
    <h2 className="theTitle">
        <Link to={theTitle} >{theTitle}</Link>
    </h2>
    <div className="llll">
      {
        theArr.filter((_,index)=>index < 4) 
        .map((value)=> {
            console.log(value)
            return <ProductCard thevalue={value} key={value.id}/>
        })
      }
    </div>
    </>
    
  )
}

export default PreviewComponent
