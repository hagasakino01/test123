import React from 'react'

const Box = (props) => {
    return (
        <div className="box11" id="idbox1">
            <div className="title-box">
                <p className="name">{props.name}</p>
                <button className="close">x</button>
            </div>
            <div>
                <img src={props.img} alt="" id="img1" />
            </div>
        </div>
    )
}

export default Box