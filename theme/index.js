import React from 'react'
import { Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const colors = (alpha = 1) => (
  {
    black: `rgba(0, 0, 0, ${alpha})`,
    blue: `rgba(51, 102, 153, ${alpha})`,
    white: `rgba(229, 229, 229, ${alpha})`,
  }
)

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`

export const Column = styled.View`
  display: flex;
  flex-direction: column;
`
export const Title = styled.Text`
  font-family: 'Futura';
  font-size: ${props => props.size || 32};
  text-align: center;
  color: ${props => props.color || colors(.9).white};
`

export const Txt = styled.Text`
  font-family: 'Futura';
  font-size: ${props => props.size || 20};
  color: ${props => props.color || colors(.9).white};
  text-align: center;
  width: ${props => props.width || '100%'};
`

export const Input = styled.TextInput`
  font-family: 'Futura';
  min-height: 40;
  width: ${Dimensions.get('window').width * 0.55};
  background-color: ${colors(.7).white};
  text-align: center;
  padding-vertical: 5;
  padding-horizontal: 5;
  margin-vertical: 2.5;
`

export const ButtonText = styled(Txt)`
  font-size: 16;
  padding-horizontal: 15;
  padding-vertical: 5;
  width: ${Dimensions.get('window').width * 0.35};
`

const button = (props) => {
  return (
    <TouchableOpacity style={{ marginVertical: 5 }}>
      <ButtonText size={14}>{props.text}</ButtonText>
    </TouchableOpacity>
  )
}

export const Label = styled(Txt)`
  font-size: 14;
  margin-top: 5;
  margin-bottom: 1;
  text-align: left;
  margin-left: 35%;
`

export const Button = styled(button)`
  margin-top: 5;
  padding-horizontal: 5;
  padding-vertical: 15;
  background-color: ${colors().blue};
  width: ${Dimensions.get('window').width * 0.35};
`

export const Theme = styled(Column)`
  flex: 1;
  background-color: ${colors(.75).blue};
  padding-top: 50;
  padding-bottom: 50;
  padding-left: 10;
  padding-right: 10;
`

