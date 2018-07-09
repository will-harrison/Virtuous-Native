import React from 'react';
import { withNavigation } from 'react-navigation'
import styled from 'styled-components'
import { Txt, Title, Column, Theme } from '../../theme/'
import BetterWorse from './BetterWorse'
import Chart from '../charts/Chart'
import { VirtueContext } from '../../api/virtueContext'

const Virtue = (props) => {
  console.log(props)
  return (
    <VirtueContext.Consumer>
      {virtues => <VirtueWithContext virtues={virtues} virtue={props.virtue || props.navigation.state.params.virtue} nav={props.navigation} />}
    </VirtueContext.Consumer>
  )
}


class VirtueWithContext extends React.Component {
  componentDidMount = async () => {
    await this.props.virtues.setVirtueData(this.props.virtue.id)
  }

  updateVirtueData = async (value) => {
    let { virtues, virtue, nav } = this.props
    await virtues.updateVirtueData(virtue.id, value)
    let currentVirtue = virtues.virtues.virtues.findIndex(v => v.id === virtue.id)
    if (currentVirtue <= virtues.virtues.virtues.length) {
      console.log(virtues.virtues.virtues[currentVirtue + 1])
      nav.push('Virtue', { virtue: virtues.virtues.virtues[currentVirtue + 1] })
    }
  }

  render() {
    const { virtue, virtues } = this.props
    return (
      <Theme>
        <VirtuesContainer>
          <Title>{virtue.virtueName}</Title>
          <Description width={'75%'} size={18}>{virtue.virtueDescription}</Description>
          <BetterWorse virtueId={virtue.id} updateVirtueData={(value) => this.updateVirtueData(value)} />
          <Chart data={virtues.virtues.virtueData} />
          <BackButton size={14}>Go Back</BackButton>
        </VirtuesContainer>
      </Theme>
    );
  }
};

const VirtuesContainer = styled(Column)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Description = styled(Txt)`
  margin-vertical: 10;
`

const BackButton = styled(Txt)`
  margin-top: 50;
`

export default withNavigation(Virtue);