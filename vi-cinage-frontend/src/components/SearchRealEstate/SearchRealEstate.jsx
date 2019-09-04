import React,{Component} from 'react';
class SearchRealEstate extends Component{
    constructor(){
        super();
        this.state={
            search: "",
            city:" ",
            state:" "
        }
    }

    // search: e.target.value, //Set Search State within the HandleChange function/ Changes the state to e.target.value
    // state:e.target.value,
    // city:e.target.value,
    handleChange=(e)=>{
        this.setState({
           search :e.target.value,
        })
        console.log(this.state.search);
    }
    handleChange2=(e)=>{
        this.setState({
        })

        console.log(this.state.city);
    }
    handleSubmit=(e)=>{
        console.log(this.state.search);
        console.log(this.state.city);
        e.preventDefault();
        this.props.grabTrulia(this.state.search)
    }
    //This.set State based on User entry: props to use in Container.
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Purpose</label>
                <input type ="text"  name = "purpose" onChange={this.handleChange}></input>
                <label>City</label>
                <input type ="text" name = "city" placeholder="City" onChange={this.handleChange}></input>
                <input type ="text" name = "state" placeholder="ST" onChange={this.handleChange}></input>
                <input type ="submit" value = "Home Search"></input>
                </form>
            </div>
        )
    }
}
export default SearchRealEstate