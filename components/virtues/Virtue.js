import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Txt, Title, Column, Theme } from '../../theme/'
import BetterWorse from './BetterWorse'
import ChartTest from '../charts/ChartTest'

class Virtue extends React.Component {
  render() {
    const { virtue } = this.props
    console.log('VIRTUE', virtue)
    return (
      <VirtuesContainer>
        <Title>{virtue.virtueName}</Title>
        <Description width={'75%'} size={18}>{virtue.virtueDescription}</Description>
        <BetterWorse />
        <ChartTest />
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

`

export default Virtue;