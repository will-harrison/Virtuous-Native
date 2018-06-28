import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { colors, Column, Theme, Txt, ButtonText } from '../../theme'
import Virtue from '../virtues/Virtue'
import { getVirtues } from '../../api/api'

import { UserContext } from '../../api/userContext'

export default Home = () => {
  <UserContext.Consumer>
    {(context) => (
      <HomeBoy {...context} />
    )}
  </UserContext.Consumer>
}

class HomeBoy extends React.Component {
  state = {
    virtues: []
  }

  componentDidMount = async () => {
    console.log(this.props)
    await this.setVirtues()
  }

  setVirtues = () => {
    getVirtues()
      .then(virtues => {
        if (virtues.length > 0) {
          this.setState(state => {
            return {
              ...state,
              virtues
            }
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    const { virtues } = this.state
    return (

      <Theme>
        <Container>
          {virtues.length
            ? <Virtue virtue={virtues[0]} />
            : <Txt width={'75%'}>There are no virtues. Please add at least one virtue.</Txt>
          }
          <TouchableOpacity onPress={() => this.props.navigation.navigate('NewVirtue')}>
            <ButtonText>New Virtue</ButtonText>
          </TouchableOpacity>
        </Container>
      </Theme>
    )


  }
}

const Container = styled(Column)`
  flex: 1;
  justify-content: center;
  align-items: center;

`