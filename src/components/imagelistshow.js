import React from 'react'
import ImageShow from './imageshow'
const ImageListShow = ({ imglist }) => {
  console.log(imglist.data)
  return (
    <div 
      className = "d-flex justify-content-between flex-wrap overflow-auto"
      style={{height:"400px", width:"650px"}}
    >
      {
        imglist.data.length !== 0 
        && imglist.data.map((info, index) => {
          return(
            <ImageShow key={info.id+"_"+index} info = {info}/>
          )
        })
      }
    </div>
  )
}

export default ImageListShow