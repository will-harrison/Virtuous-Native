import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { Txt, Title, Row } from '../../theme/'

const BetterWorse = props => {
  return (
    <Container>
      <TouchableOpacity>
        <ButtonText>Better</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity>
        <ButtonText>Worse</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};

BetterWorse.propTypes = {

};

const ButtonText = styled(Txt)`
  padding-horizontal: 15;
`

const Container = styled(Row)`
  margin-top: 25;
`

export default BetterWorse;