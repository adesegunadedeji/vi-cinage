import React, {Component} from 'react';

class realEstateContainer extends Component{
    constructor(){
        super();
        this.state={    
            realEstate:[]
        }
    }

        getEstates = async() => {
            try{
            const realEstate = await fetch("http://localhost:9000/api/v1/realEstate")
            const parsedResponse = await realEstate.json();
            console.log(parsedResponse);
                if(parsedResponse.code === 200){
                    this.setState({
                        realEstate: parsedResponse.data
                    })
                    console.log(this.state.realEstate)
                }
            }
            catch(err){
                console.log(err);
            }

        }

    render(){
        return(
            <div>
                <h1> Employee Database</h1>
            </div>
        )
    }
}
export default realEstateContainer