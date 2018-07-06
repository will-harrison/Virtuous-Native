import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components'
import { ButtonText, Column, Input, Label, Title, Theme, Txt, colors } from '../../theme'
import { addVirtue, getVirtues } from '../../api/api'

import { UserContext } from '../../api/userContext'
import { VirtueContext } from '../../api/virtueContext'

const NewVirtueContext = (props) => (
  <UserContext.Consumer>
    {user => (
      <VirtueContext.Consumer>
        {virtues => (
          <NewVirtue user={user} virtues={virtues} nav={props.navigation} />
        )}
      </VirtueContext.Consumer>
    )}
  </UserContext.Consumer>
)

class NewVirtue extends Component {
  state = {
    virtueName: '',
    virtueDescription: '',
    user: ''
    // TODO: change to real user
  }

  componentDidMount = async () => {
    if (this.props.user.user.testing) {
      await this.setState(state => {
        return {
          virtueName: 'Order',
          virtueDescription: 'Be orderly',
          user: this.props.user.user.userId
        }
      })
    }
  }


  handleChange = (key, value) => {
    this.setState(state => {
      return {
        ...state,
        [key]: value
      }
    })
  }

  handleSubmit = async () => {
    if (virtueName === '' || virtueDescription === '') return
    let { virtueName, virtueDescription, user } = this.state
    await this.props.virtues.addNewVirtue(this.props.user.user.userId, virtueName, virtueDescription)
    this.props.nav.navigate('HomeContext')
  }

  render() {
    return (
      <Theme>
        <KeyboardAvoidingView behavior={'padding'}>
          <Container>
            <Title>Add a Virtue</Title>
            <Label>Virtue Name</Label>
            <Input
              value={this.state.virtueName}
              placeholder={'Order'}
              placeholderTextColor={colors(.5).black}
              returnKeyType={'next'}
              onChangeText={val => this.handleChange('virtueName', val)}
              onSubmitEditing={() => this.descriptionInput.focus()} />
            <Label>Description</Label>
            <Input
              value={this.state.virtueDescription}
              placeholder={`Let all your things have their places; let each part of your business have its time.`}
              placeholderTextColor={colors(.5).black}
              returnKeyType={'go'}
              onChangeText={val => this.handleChange('virtueDescription', val)}
              ref={(input) => { this.descriptionInput = input }}
              multiline={true} />

            <TouchableOpacity onPress={this.handleSubmit}>
              <ButtonText>Add Virtue</ButtonText>
            </TouchableOpacity>
          </Container>
        </KeyboardAvoidingView>
      </Theme>
    )
  }
}

const Container = styled(Column)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default withNavigation(NewVirtueContext)