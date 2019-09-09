import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Col, Form, FormGroup, Label, Input} from 'reactstrap';

class EditEstateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: props.realEstate.name,
      city:props.realEstate.city,
      price:props.realEstate.price,
      description: props.realEstate.description
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
handleChange = (e)=>{
this.setState({
    [e.target.name]: e.target.value
})
}
handleSubmit= async (e)=>{
    e.preventDefault();
    console.log("Ready to Edit")
    const validUpdate = await this.props.updateEstate(this.props.realEstate._id, this.state);
    if(validUpdate=== true){
        this.toggle(); 
    }
}
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}> Edit {this.props.realEstate.name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} charCode="V">{this.state.name}</ModalHeader>
          <ModalBody className ="modal-body">
              <Form onSubmit = {this.handleSubmit}>
              <FormGroup row>
          <Label for="exampleEmail2" sm={2}> Name</Label>
          <Col sm={10}>
                <Input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}> City</Label>
          <Col sm={10}>
                <Input type="text" name="city"onChange={this.handleChange}value={this.state.city}/>
                </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail2" sm={2}> Price</Label>
          <Col sm={10}>
                <Input type="text" name="price"onChange={this.handleChange}value={this.state.price}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}> Description</Label>
          <Col sm={10}>
                <Input type="textarea" name="description"onChange={this.handleChange}value={this.state.description}/>
                </Col>
        </FormGroup>
              </Form>
           </ModalBody>
          <ModalFooter>
            <Button outline color="success" onClick={this.handleSubmit}>Edit Real Estate{' '}</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default EditEstateModal