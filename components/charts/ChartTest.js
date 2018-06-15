import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import styled from 'styled-components'
import { Column, colors } from '../../theme/'

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 16500 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 },
  { quarter: 9, earnings: 13000 },
  { quarter: 10, earnings: 16500 },
  { quarter: 11, earnings: 14250 },
  { quarter: 12, earnings: 19000 },
];

export default class App extends React.Component {
  render() {
    return (
      <ChartContainer>
        <VictoryLine
          data={data}
          x="quarter"
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