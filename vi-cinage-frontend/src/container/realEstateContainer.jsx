import React, {Component} from 'react';
import RealEstateList from './RealEstateList/RealEstateList'

class realestatecontainer extends Component{
    constructor(){
        super();
        this.state={    
            realEstate:[]
        }
    }


        getEstates = async() => {
            try{
            const realEstate = await fetch("http://localhost:9000/api/v1/realEstate")
//             const zwsid = "X1-ZWz17p67vzzevf_1zmzq"
//             const address = "";
//             const city = ""
// // sample API Call
// //  http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA

//          const zillow = await fetch(`http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${zwsid}&address=${address}&citystatezip=${city}`)
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

        componentDidMount(){
            console.log("Component is Mounting")
            this.getEstates()
        }

    render(){
        return(
            <div>
                <h1> Employee Database</h1>
                <RealEstateList realEstate={this.state.realEstate}/>
            </div>
        )
    }
}
export default realestatecontainer