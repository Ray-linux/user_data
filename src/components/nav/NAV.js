import React from 'react'
import Loading from '../loading/Loading'
import Users from '../usercard/Users'
import './nav.css'
function NAV(props) {
  return (
    <>
    <div className="nav">
        <div className="brand_name">
            {props.brand}
        </div>
        <div className="get_user_btn">
            <button onClick={props.click}>Get data</button></div>
    </div>
    <div className="users">
    { 
    props.isLoading?
    props.data.map((items) => {
         return  <Users data = {items} key={items.id} isLoading = {props.isLoading}/>
        }) 
        : <Loading/>
      }
      </div>
    </>
  )
}

export default NAV