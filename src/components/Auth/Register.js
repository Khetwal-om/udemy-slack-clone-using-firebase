import React, { Component } from 'react'
import { Link } from 'react-router-dom'



import {Grid,Form,Segment,Button,Header,Message,Icon} from 'semantic-ui-react'

class Register extends Component {
    state={
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }
    handleChange=(event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        

    }
    render() {
        const {username,password,email,passwordConfirmation}=this.state
        return (
            <Grid textAlign="center" verticalAlign="middle">
              <Grid.Column style={{maxWidth: 450}}>
                  <Header as="h2" icon color="orange" textAlign="center">
                      <Icon name="puzzle piece" color="orange">
                          Register for DevChat
                      </Icon>
                  </Header>

                      <Form size="large" onSubmit={this.handleSubmit}>
                       <Segment stacked>
                         <Form.Input fluid name="username" value={username} iconPosition="left" icon="repeat" type="text" placeholder="username" onChange={this.handleChange}/>
                         <Form.Input fluid name="email"  value={email} iconPosition="left" icon="repeat" type="email" placeholder="email" onChange={this.handleChange}/>
                         <Form.Input fluid name="password" value={password}  iconPosition="left" icon="repeat" type="password" placeholder="password" onChange={this.handleChange}/>
                         <Form.Input fluid name="passwordConfirmation" value={passwordConfirmation}  icon="repeat" iconPosition="left" type="password" placeholder="password Confirmation" onChange={this.handleChange}/>
                        <Button color="orange" fluid size="large">Submit</Button>
                        </Segment>
                      </Form>
                      <Message> 
                          Already a user? <Link to="/login">
                              Login
                          </Link>
                      </Message>  
              </Grid.Column>

            </Grid>
        )
    }
}

export default Register
