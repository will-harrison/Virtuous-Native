import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components'
import { ButtonText, Column, Input, Label, Title, Theme, Txt, colors } from '../../theme'
import { addVirtue, getVirtues } from '../../api/api'

class NewVirtue extends Component {
  state = {
    virtueName: '',
    virtueDescription: '',
    user: 1
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
    const { virtueName, virtueDescription, user } = this.state
    if (virtueName === '' || virtueDescription === '') return
    await addVirtue(user, virtueName, virtueDescription)
    this.props.navigation.push('Home')
  }

  render() {
    return (
      <Theme>
        <Container behavior={'padding'}>
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
      </Theme>
    )
  }
}

const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default NewVirtue