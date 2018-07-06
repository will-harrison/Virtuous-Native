import React from 'react';
import { withNavigation } from 'react-navigation'
import styled from 'styled-components'
import { Txt, Title, Column, Theme } from '../../theme/'
import BetterWorse from './BetterWorse'
import Chart from '../charts/Chart'
import { VirtueContext } from '../../api/virtueContext'

const Virtue = (props) => (
  <VirtueContext.Consumer>
    {virtues => <VirtueWithContext virtues={virtues} virtue={props.virtue} nav={props.navigation} />}
  </VirtueContext.Consumer>
)


class VirtueWithContext extends React.Component {
  componentDidMount = async () => {
    console.log('VirtueWithContext: props', this.props)
    const virtueData = await this.props.virtues.setVirtueData(this.props.virtue.id)
    console.log('Virtue: virtueData', virtueData)
  }

  render() {
    const { virtue, virtues } = this.props
    return (
      <VirtuesContainer>
        <Title>{virtue.virtueName}</Title>
        <Description width={'75%'} size={18}>{virtue.virtueDescription}</Description>
        <BetterWorse virtueId={virtue.id} updateVirtueData={(value) => virtues.updateVirtueData(value)} />
        <Chart />
        <BackButton size={14}>Go Back</BackButton>
      </VirtuesContainer>
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