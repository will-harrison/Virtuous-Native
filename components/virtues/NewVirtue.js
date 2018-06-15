import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { ButtonText, Column, Input, Label, Title, Txt, colors } from '../../theme'
import { addVirtue, getVirtues } from '../../api/api'

class NewVirtue extends Component {
  state = {
    virtueName: '',
    virtueDescription: ''
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
    const { virtueName, virtueDescription } = this.state
    const { user } = this.props
    if (virtueName === '' || virtueDescription === '') return
    await addVirtue(user, virtueName, virtueDescription)
    const blah = await getVirtues(user)
    console.log(blah)
  }

  render() {
    return (
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
    )
  }
}

const Container = styled(Column)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default NewVirtue