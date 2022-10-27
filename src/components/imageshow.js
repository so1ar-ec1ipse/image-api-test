import React, { useEffect, useRef, useState } from 'react'
const ImageShow = ({info}) => {
    const ref = useRef(null)
    const [CSSstyle, setCSSstyle] = useState({"gridRowEnd":""})
    useEffect( ()=>{
        console.log(info)
        setCSSstyle({
            backgroundImage:`url(${info.urls.thumb})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            width:"200px",
            height:"117px",
            marginBottom:0,
        })
    }, [ref.current])
    return(
        <div className='m-1' ref = {ref}>
            <div style = {CSSstyle} ></div>
            <div className='d-flex' style={{marginTop:".5rem", fontSize:'11px'}}>
                <div 
                    className='col-xs-2 p-0'
                    style={{width:"30px", height:"55px", backgroundColor:`${info.color}`}}>
                </div>
                <div className='col-xs-10 p-1'>
                    <div><b>{info.id}</b></div>
                    <div>{info.created_at.split('T')[0]}</div>
                    <div>{info.updated_at.split('T')[0]}</div>
                </div>
            </div>
        </div>
        
    )
}

export default ImageShow