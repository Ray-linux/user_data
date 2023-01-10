import React from 'react'
import Loading from '../loading/Loading'
import './card.css'
export default function Users(props) {
  return (
    <>
        <div className="user_container">
      <div className="avatar">
        <img src={props.data.avatar} alt="img"/>
      </div>
      <div className="details">
        <div className="name"> Name : {props.data.first_name} {props.data.last_name}</div>
        <div className="email">Email : {props.data.email}</div>
        <div className="connect">
          <button>Connect</button>
        </div>
      </div>
    </div>
    </>
  )
}
