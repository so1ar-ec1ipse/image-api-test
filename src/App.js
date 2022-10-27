import React, { useState } from 'react'
import './App.css'
import Twitch from './assets/img/twitch.png'
import { SearchBox, ImageListShow, TitleComponent } from './components'
import CraeteBtn from './assets/img/createbtn.jpg'
import ClipImg from './assets/img/clip.jpg'
function App() {
  const [imglist, setImgList] = useState({data:[], pg:0, search:'sea'})
  return (
    <div className="App">
      <div className='text-center p-3'>
        <h1 style={{fontWeight:'900', fontSize:'55px'}}>
          <span className='text-black m-2'>3X</span>
          <span className='text-danger m-2'>CONTENT</span>
        </h1>
      </div>
      <div className='p-1'>
        <img src={Twitch} style={{width:"40px", marginLeft:'-50px'}}/>
        <span className='p-1' style={{fontSize:"20px", fontWeight:"900"}}>Twitch Clips Compilation</span>
      </div>
      <TitleComponent title="Search Streamer or Game">
        <SearchBox setImgList = {setImgList}/>
      </TitleComponent>
      <TitleComponent title={'Select Clips'}>
        <img className='rounded rounded-3' src={ClipImg}></img>
      </TitleComponent>

      <div style={{marginBottom:"5rem"}}>
        <ImageListShow imglist = {imglist} />
      </div>
      <TitleComponent title={"Add Intro"} chooseFile></TitleComponent>
      <TitleComponent title={"Add Outro"} chooseFile></TitleComponent>
      <TitleComponent title={"Add Transitions between clips"} chooseFile></TitleComponent>
      <img className='rounded rounded-3' src={CraeteBtn}></img>
    </div>
  )
}

export default App
