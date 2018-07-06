import React from 'react';
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Txt, Row } from '../../theme/'

const BetterWorse = (props) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => props.updateVirtueData(1)}>
        <ButtonText width={30}>Better</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.updateVirtueData(-1)}>
        <ButtonText width={30}>Worse</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};

const ButtonText = styled(Txt)`
`
// padding-horizontal: 15;

const Container = styled(Row)`
  margin-top: 25;
`

export default BetterWorse;