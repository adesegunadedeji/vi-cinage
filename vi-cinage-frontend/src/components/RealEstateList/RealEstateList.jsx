import React from 'react'

function RealEstateList(props){
    const realEstate = props.realEstate.map(function(realEstate){
        return(
            <li key={realEstate._id}>
            <h1>{realEstate.name}</h1>
            <p>{realEstate.description}</p>
            <p>Uploaded by :{realEstate.user}</p> 
            <button onClick={()=>{props.deleteEstate(realEstate._id)
    }}>Delete Estate</button>
        </li>
    )
    })
//Need to add Usernameto Uploaded by:
 return(
        <div>
            <ul>
            {realEstate}
            </ul>
        </div>
    )
}
export default RealEstateList
{/*  */}