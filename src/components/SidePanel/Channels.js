import React, { Component } from 'react'
import firebase from '../../firebase'
import {Form, Icon, Input, Menu, Modal,Button} from 'semantic-ui-react'

class Channels extends Component {
    state={
        user: this.props.currentUser,
        channels: [],
        modal: false,
        channelsRef: firebase.database().ref('channels'),
        channelName: '',
        channelDetail: ''
    }
    handleSubmit=event=>{
        event.preventDefault()
        if(this.isFormValid(this.state)){
            this.addChannel()
            console.log('channel creation')
        }
    }
    addChannel=()=> {
        const {channelsRef,channelName,channelDetails,user}=this.state
        const key=channelsRef.push().key
        const newChannel={
            id: key,
            name: channelName,
            details: channelDetails,
            createdBy: {
                name: user.displayName,
                avatar: user.photoURL
            }
        }
        channelsRef
           .child(key)
           .update(newChannel)
           .then(()=>{
               this.setState({channelName: '',channelDetails: ''})
               this.closeModal()
               
           }).catch((e)=> console.log(e))
    }
    isFormValid=({channelName,channelDetails})=> channelName && channelDetails
    handleChange=event=> {
        this.setState({[event.target.name]: event.target.value})
    }
    closeModal=()=> this.setState({modal: false})
    openModal=()=>this.setState({modal: true})
    render() {
        const {channels,modal}=this.state
        return (
            <>
            <Menu.Menu style={{paddingBotton: '2rem'}}>
              <Menu.Item>
                  <span>
                      <Icon name="exchange"/> 
                      Channels
                  </span>
                 ({channels.length}) <Icon name="add" onClick={this.openModal}/>
              </Menu.Item>
            </Menu.Menu>
            <Modal basic open={modal} onClose={this.closeModal}>
                <Modal.Header>Add a Channel</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Input fluid label="Name of channel" name="channelName" onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Input fluid label="Channel Details" name="channelDetails" onChange={this.handleChange} />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="green" inverted onClick={this.handleSubmit}>
                       <Icon name="checkmark" /> Add
                    </Button>
                    <Button color="red" inverted onClick={this.closeModal}>
                       <Icon name="remove" /> Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
            </>
        )
    }
}

export default Channels
