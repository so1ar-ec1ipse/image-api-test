import React, { useEffect, useState } from "react"
import LoadImageAPI from "../APIs/loadImage.api"
const SearchBox = ({setImgList}) => {
  // search key workd
  const [ search, setSearch] = useState('sea')
  const setChange = (ev) => {
      setSearch(ev.target.value)
  }
  // on loading
  useEffect(()=>{
    LoadImageAPI({search, pg:1}).then(res=> {
      setImgList({data:res, pg:1, search})
    })
  }, [])
  // when "enter"
  const onEnter = (ev) => {
    ev.preventDefault()
    LoadImageAPI({search, pg:1}).then(res=> {
      setImgList({data:res, pg:1, search})
    })
  }
  return (
      <form onSubmit = {onEnter}>
        <div class="input-group">
          <div class="form-outline">
            <input 
              id="search-input" type="search" placeholder="search..." class="form-control"
              value = {search} 
              onChange = {(ev)=>setChange(ev)}
            />
          </div>
          <button id="search-button" type="submit" onClick={onEnter} class="btn btn-secondary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form >
  )
}

export default SearchBox