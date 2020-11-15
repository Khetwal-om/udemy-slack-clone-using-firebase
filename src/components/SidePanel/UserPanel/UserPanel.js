import React, { Component } from 'react'

import { Dropdown, Grid,Header, Icon,Image } from 'semantic-ui-react'
import firebase from '../../../firebase'

class UserPanel extends Component {
    state={
        user: this.props.currentUser
    }
    
    
    
    dropdownOptions=()=> [
        {
            key: 'user',
            text: <span>Signed in as {this.state.user.displayName}</span>,
            
            //text: <span>Signed in as {this.state.user&& this.state.user.displayName}</span>,
            
            disabled: true
        },
        {
            key: 'avatar',
            text: <span>Change Avatar</span>
        },
        {
            key: 'signup',
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }
    ]
    handleSignout=()=> {
        firebase
            .auth()
            .signOut()
            .then(()=>console.log('signed out'))
    }




    render() {
        console.log(this.props.currentUser)
        const {user}=this.state
        return (
            <Grid style={{background: '#4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{padding: '1.2rem',margin: 0}}>
                      <Header inverted floated="left" as="h2">
                          <Icon name="code"/>
                          <Header.Content>
                              DevChat
                          </Header.Content>
                      </Header>
                    <Header style={{padding: '.25rem'}} as="h4" inverted>
                        <Dropdown trigger={<span> <Image src={user.photoURL} avatar spaced="right"/> {user.displayName}</span>} options={this.dropdownOptions()}/>
                    </Header>
                </Grid.Row>
                </Grid.Column>

            </Grid>
        )
    }
}



export default UserPanel
