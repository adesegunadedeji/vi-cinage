import React, {Component} from 'react'

class NewEstates extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            city:"",
            price:0,
            description:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createNewEstate(this.state);
    }

    render(){
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                     <h4>Add a New Property</h4>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={this.handleChange}/>
                <label htmlFor="city">City:</label>
                <input type="text" name="city" onChange={this.handleChange}/>
                <label htmlFor="price">Price:</label>
                <input type="text" name="price" onChange={this.handleChange}/>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" onChange={this.handleChange}/>
                <input type="submit" value="Add Property"></input>
                 </form>
            </div>
        )
    }
}

export  default NewEstates