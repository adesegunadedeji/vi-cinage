import React, {Component} from 'react'
import {Button, Col, Form, FormGroup, Label, Input} from 'reactstrap';
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

                 <Form onSubmit = {this.handleSubmit}>
              <FormGroup row>
          <Label for="exampleEmail2" sm={2}> Name</Label>
          <Col sm={10}>
                <Input type="text" name="name" onChange={this.handleChange}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}> City</Label>
          <Col sm={10}>
                <Input type="text" name="city"onChange={this.handleChange}/>
                </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail2" sm={2}> Price</Label>
          <Col sm={10}>
                <Input type="text" name="price"onChange={this.handleChange}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}> Description</Label>
          <Col sm={10}>
                <Input type="textarea" name="description"onChange={this.handleChange}/>
                </Col>
        </FormGroup>
        <Button outline color="success">Add Property</Button>{' '}
              </Form>
            </div>
        )
    }
}

export  default NewEstates