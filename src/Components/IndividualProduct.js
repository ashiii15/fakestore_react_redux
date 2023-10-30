import React from 'react'
import { useSelector } from 'react-redux'

function IndividualProduct() {
  let data = useSelector((state)=>state.allproducts.products)

  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text"></p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default IndividualProduct