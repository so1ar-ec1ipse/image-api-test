import React from 'react'
const TitleComponent = ({title, chooseFile, children}) => {
    return <div>
        <div className='d-flex flex-wrap items-align-bottom' style={{marginTop:"1rem", marginBottom:".5rem"}}>
            <h2 style={{
                fontSize:"42px",
                fontWeight:"900"
            }}>
                {title}
            </h2>
            {
                chooseFile&&
                // <input type='file'></input>
                    <button className='m-3 btn btn-secondary'>Choose Files</button>
            }
        </div>
        {children}
    </div>
}

export default TitleComponent