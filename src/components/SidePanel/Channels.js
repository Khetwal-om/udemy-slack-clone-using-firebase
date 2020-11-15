import React, { Component } from 'react'
import {Form, Icon, Input, Menu, Modal,Button} from 'semantic-ui-react'

class Channels extends Component {
    state={
        channels: [],
        modal: false,
        channelName: '',
        channelDetail: ''
    }
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
                    <Form>
                        <Form.Field>
                            <Input fluid label="Name of channel" name="channelName" onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Input fluid label="Channel Details" name="channelDetails" onChange={this.handleChange} />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="green" inverted>
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
