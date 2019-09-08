import React from 'react'
import EditEstateModal from '../EditEstatesModal/EditEstatesModal';

function RealEstateList(props){
    const realEstate = props.realEstate.map(function(realEstate){
        console.log(realEstate)
        return(
          
            <li key={realEstate._id}>
            <h1>{realEstate.name}</h1>
            <p>{realEstate.description}</p>
            <p>Uploaded by: {realEstate.user.username}</p>
            <EditEstateModal realEstate={realEstate} updateEstate={props.updateEstate} />
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