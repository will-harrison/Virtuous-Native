import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Txt, Title, Column } from '../../theme/'
import BetterWorse from './BetterWorse'
import ChartTest from '../charts/ChartTest'

class Virtue extends React.Component {
  render() {
    const { virtue } = this.props
    return (
      <VirtuesContainer>
        <Title>{virtue.title}</Title>
        <Description width={'75%'} size={16}>{virtue.description}</Description>
        <BetterWorse />
        <ChartTest />
        <BackButton size={14}>Go Back</BackButton>
      </VirtuesContainer>
    );
  }
};

Virtue.propTypes = {
  virtue: PropTypes.object.isRequired
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