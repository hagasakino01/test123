import React from 'react'

const BoxLogin = (props) => {
    return (
        <div className="box11" id="idbox1">
            <div className="title-box">
                <p className="name">{props.name}</p>
                <button className="close">x</button>
            </div>
            <img src={props.img} alt="" id="img1" />
        </div>
    )
}

export default BoxLogin