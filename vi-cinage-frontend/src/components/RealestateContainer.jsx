import React, {Component} from 'react';
import RealEstateList from './RealEstateList/RealEstateList'
import SearchRealEstate from './SearchRealEstate/SearchRealEstate'

console.log(process.env.API_KEY)
console.log(process.env.Name)
class Realestatecontainer extends Component{
    constructor(props){
        super(props);
        this.state={    
            realEstate:[],
            realEstatefromZillow:[]
        }
    }
        getEstates = async() => {
            try{
            const realEstate = await fetch("http://localhost:9000/api/v1/realEstate")
            const parsedResponse = await realEstate.json();
            console.log(parsedResponse);
                if(parsedResponse.code === 200){
                    this.setState({
                        realEstate: parsedResponse.data,
                    })
                    console.log(this.state.realEstate)
                }
            }
            catch(err){
                console.log(err);
            }
        }
        grabTrulia = async(search, cityState) => {
            const term = search//this.state.search if term
            console.log(term)
            try{
            const trulia = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=${cityState}&limit=10&user_key=${API_KEY}&query=${term}`,{
                        method: "GET",
                        headers:{
                                "Content-Type": "application/json",
                                "credentials": "same-origin",
                        }

           })
           const truliaJson = await trulia.json();
           console.log(truliaJson)
           this.setState({
            realEstatefromTrulia: truliaJson.data  
        })
        console.log(this.state.realEstatefromTrulia)
    }
        catch(err){
            console.log(err)
        }
    }
        componentDidMount(){
            console.log("Component is Mounting")
            this.getEstates()
             this.grabTrulia();
        }
    render(){
        return(
            <div>
                <h1> Employee Database</h1>
                <SearchRealEstate grabTrulia={this.grabTrulia}/>
                <RealEstateList realEstate={this.state.realEstate}/>
            </div>
        )
    }
}
export default Realestatecontainer