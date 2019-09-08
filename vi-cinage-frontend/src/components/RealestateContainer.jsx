import React, {Component} from 'react';
import RealEstateList from './RealEstateList/RealEstateList'
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
            try{
                console.log(formData)
                const updatedEstate = await fetch(`http://localhost:9000/api/v1/realEstate/${id}`,
                {
            method: "PUT",
            body:JSON.stringify(formData),
            credentials: "include",
            headers:{
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await updatedEstate.json();
        console.log(parsedResponse)
        if (parsedResponse.status.code === 201){
            console.log("EstateUpdated", formData)
            await this.setState({
                realEstate:this.state.realEstate.map(realEstate=>realEstate._id === id? parsedResponse.data : realEstate)
        })
            }
        }
            catch(err){
                console.log(err)
            }
        }

       
        createNewEstate = async(formData)=>{
            try{ 
            const newEstate = await fetch ("http://localhost:9000/api/v1/realEstate",{
                method:"POST",
                credentials: "include",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await newEstate.json();
            if(parsedResponse.status.code === 201){
                this.setState({
                    realEstate:[parsedResponse.data,...this.state.realEstate]
                }) // Might Need to change State to show who uploaded the Estate.
            }
        }
        catch(err){
            console.log(err)
        }
        }

        deleteEstate = async(id)=>{
            try{
                const deleteEstate = await fetch(`http://localhost:9000/api/v1/realEstate/${id}`,{
                    method: "DELETE",
                    credentials:"include"
                });
                const parsedResponse = await deleteEstate.json();
                if (parsedResponse.status.code === 200){
                    this.setState({
                        realEstate: this.state.realEstate.filter(realEstate=> realEstate._id !==id)
                    })
                }
            }
            catch(err){
                console.log(err)
            }
        }

        componentDidMount(){
            console.log("Component is Mounting")
            this.getEstates()
            //  this.grabTrulia();
        }
        
    render(){
        return(
            <div>
                <h1>Vi-cinage</h1>
                <NewEstates createNewEstate={this.createNewEstate}/>
                <RealEstateList realEstate={this.state.realEstate} deleteEstate={this.deleteEstate} updateEstate={this.updateEstate} />
            </div>
        )
    }
}
export default Realestatecontainer