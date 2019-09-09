import React from 'react'
import EditEstateModal from '../EditEstatesModal/EditEstatesModal';
import {Button} from 'reactstrap';
function RealEstateList(props){
    const realEstate = props.realEstate.map(function(realEstate){
        console.log(realEstate)
        return(
          
            <li key={realEstate._id}>
            <h1>{realEstate.name}</h1>
            <p>{realEstate.description}</p>
            <img src = {realEstate.image} alt={realEstate.name}/>
            <p>Uploaded by: {realEstate.user.username}</p>
            <EditEstateModal realEstate={realEstate} updateEstate={props.updateEstate} />
            <Button  outline color="danger" onClick={()=>{props.deleteEstate(realEstate._id)
    }}>Delete Estate</Button>
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