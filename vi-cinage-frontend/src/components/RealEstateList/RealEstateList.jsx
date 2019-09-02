import React from 'react'

function RealEstateList(props){
    const realEstate = props.realEstate.map(function(realEstate){
        return(
            <li key={realEstate._id}>
            <h1>{realEstate.name}</h1>
        </li>
    )
    })


 return(
        <div>
            <ul>{realEstate}</ul>
        </div>
    )
}
export default RealEstateList