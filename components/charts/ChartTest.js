import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import styled from 'styled-components'
import { Column, colors } from '../../theme/'

const data = [
  { quarter: 1, earnings: 0 },
  { quarter: 1, earnings: -1 },
  { quarter: 1, earnings: 0 },
  { quarter: 1, earnings: 1 },
  { quarter: 2, earnings: 2 },
  { quarter: 3, earnings: 1 },
  { quarter: 4, earnings: 2 },
  { quarter: 5, earnings: 1 },
  { quarter: 6, earnings: 0 },
  { quarter: 7, earnings: 1 },
  { quarter: 8, earnings: 2 },
  { quarter: 9, earnings: 3 },
  { quarter: 10, earnings: 2 },
  { quarter: 11, earnings: 3 },
  { quarter: 12, earnings: 4 },
];

export default class App extends React.Component {
  render() {
    return (
      <ChartContainer>
        <VictoryLine
          data={data}
          y="earnings"
          style={{
            data: { stroke: `${colors().white}` }
          }} />
      </ChartContainer>
    );
  }
}

const ChartContainer = styled(Column)`
  justify-content: center;
  align-items: center;
  background-color: ${colors(0).blue};
  margin-top: 25;
`