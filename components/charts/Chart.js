import React from 'react'
import { View } from 'react-native'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native'
import styled from 'styled-components'
import { Column, colors, Txt } from '../../theme/'
import { VirtueContext } from '../../api/virtueContext';

export default Chart = () => (
  <VirtueContext.Consumer>
    {virtues => <ChartWithContext data={() => virtues.setVirtueData(1)} />}
  </VirtueContext.Consumer>
)

class ChartWithContext extends React.Component {
  render() {
    let { data } = this.props
    console.log(data)
    return (
      <ChartContainer>
        {data.length ?
          <VictoryLine
            data={data}
            y="value"
            height={200}
            style={{
              data: { stroke: `${colors().white}` },
            }} />
          :
          <View>
            <Txt size={15} width={60} vert={5}>You have no data logged for this virtue.</Txt>
            <Txt size={18} width={60} vert={5}>Select Better or Worse based on how you compare to yesterday.</Txt>
          </View>
        }
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