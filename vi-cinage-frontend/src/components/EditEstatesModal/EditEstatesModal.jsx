import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
          <ModalHeader toggle={this.toggle} charCode="V">Modal title</ModalHeader>
          <ModalBody>
              <form onSubmit = {this.handleSubmit}>
                Name: <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                City: <input type="text" name="city"onChange={this.handleChange}value={this.state.city}/>
                Price: <input type="text" name="price"onChange={this.handleChange}value={this.state.price}/>
                Description: <textarea type="text" name="description"onChange={this.handleChange}value={this.state.description}/>
              </form>
           </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Edit Real Estate{' '}</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default EditEstateModal