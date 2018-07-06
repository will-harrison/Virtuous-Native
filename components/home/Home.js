import React from 'react'
import { TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components'
import { colors, Column, Theme, Txt, ButtonText } from '../../theme'
import Virtue from '../virtues/Virtue'

import { UserContext } from '../../api/userContext'
import { VirtueContext } from '../../api/virtueContext'


const Home = (props) => (
  <UserContext.Consumer>
    {user => (
      <VirtueContext.Consumer>
        {virtues => (
          <HomeWithContext user={user} virtues={virtues} nav={props.navigation} />
        )}
      </VirtueContext.Consumer>
    )
    }
  </UserContext.Consumer>
)

class HomeWithContext extends React.Component {
  componentDidMount = () => {
    this.props.virtues.getVirtues(this.props.user.user.userId)
  }

  render() {
    let virtues = this.props.virtues.virtues.virtues
    return (
      <Theme>
        <Container>
          {virtues.length
            ? <Virtue virtue={virtues[0]} />
            : <Txt width={75}>There are no virtues. Please add at least one virtue.</Txt>
          }
          <TouchableOpacity onPress={() => { this.props.nav.navigate('NewVirtueContext') }}>
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

export default withNavigation(Home)