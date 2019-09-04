import React, {Component} from 'react';
import RealEstateList from './RealEstateList/RealEstateList'
import SearchRealEstate from './SearchRealEstate/SearchRealEstate'
import NewEstates from './NewEstates/NewEstates';

class Realestatecontainer extends Component{
    constructor(props){
        super(props);
        this.state={    
            realEstate:[],
        }
    }
        getEstates = async() => {
            try{
            const realEstate = await fetch("http://localhost:9000/api/v1/realEstate",{
                credentials: "include"
            })
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

        updateEstate = async(id,formData)=>{
            const updatedEstate = await fetch(`http://localhost:9000/api/v1/realEstate/${id}`,{
                method: "PUT",
                body:JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await updatedEstate.json();
            console.log(parsedResponse)
            if (parsedResponse.status.code === 201){
                this.setState({
                    realEstate:formData
                })
            }

        }

        createNewEstate = async(formData)=>{
            const newEstate = await fetch ("http://localhost:9000/api/v1/realEstate",{
                method:"POST",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await newEstate.json();
            if(parsedResponse.status.code === 201){
                this.setState({
                    realEstate:[parsedResponse.data, ...this.state.realEstate]
                })
            }
        }
    //     grabTrulia = async(search, city,state, idt) => {
    //         const term = search//this.state.search if term
    //         console.log(term)
    //         const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
    //         const REACT_APP_ID = process.env.REACT_APP_ID
         
    //         try{
    //         const trulia = await fetch(`https://trulia.p.rapidapi.com/properties/detail?cy=${city}&st=${state}&id=${REACT_APP_ID}&idt=${idt}`,{
    //                     method: "GET",
    //                     headers:{
    //                             "Content-Type": "application/json",
    //                             "x-rapidapi-host": "trulia.p.rapidapi.com",
	// 	                        "x-rapidapi-key": REACT_APP_API_KEY
    //                     }

    //        })
    //        const truliaJson = await trulia.json();
    //        console.log(truliaJson)
    //        this.setState({
    //         realEstatefromTrulia: truliaJson.data  
    //     })
    //     console.log(this.state.realEstatefromTrulia)
    // }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
        componentDidMount(){
            console.log("Component is Mounting")
            this.getEstates()
            //  this.grabTrulia();
        }
    render(){
        return(
            <div>
                <h1> Employee Database</h1>
                <NewEstates createNewEstate={this.createNewEstate}/>
                <SearchRealEstate grabTrulia={this.grabTrulia}/>
                <RealEstateList realEstate={this.state.realEstate}/>
                
            </div>
        )
    }
}
export default Realestatecontainer