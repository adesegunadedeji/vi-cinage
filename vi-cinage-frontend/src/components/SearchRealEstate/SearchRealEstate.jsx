import React,{Component} from 'react';
class SearchRealEstate extends Component{
    constructor(){
        super();
        this.state={
            search: " ",
            city:" "
        }
    }

    handleChange=(e)=>{
        this.setState({
            search: e.target.value, //Set Search State within the HandleChange function/ Changes the state to e.target.value
        })
        console.log(this.state.search);
    }
    handleChange2=(e)=>{
        this.setState({
            city:e.target.value
        })
        console.log(this.state.city);
    }
    handleSubmit=(e)=>{
        console.log(this.state.search);
        console.log(this.state.city);
        e.preventDefault();
        this.props.grabTrulia(this.state.search, this.state.city)
    }
    //This.set State based on User entry: props to use in COntainer.
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Practice</label>
                <input type ="text" onChange={this.handleChange}></input>
                <label>City</label>
                <input type ="text" placeholder="ST-City" onChange={this.handleChange2}></input>
                <input type ="submit" value = "Home Search"></input>
                </form>
            </div>
        )
    }
}
export default SearchRealEstate