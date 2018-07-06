import React, { Component } from 'react'
import { getVirtues, addVirtue, getVirtueData, addVirtueData } from './api'

export const VirtueContext = React.createContext();

class VirtueProvider extends Component {
  state = {
    virtues: [],
    virtueData: []
  }

  addNewVirtue = async (userId, virtueName, virtueDescription) => {
    await addVirtue(userId, virtueName, virtueDescription)
    this.getVirtues(userId)
  }

  getVirtues = async (userId) => {
    let virtues = await getVirtues(userId)
    await this.setState(state => {
      return {
        ...state,
        virtues
      }
    })
    return this.state.virtues
  }


  setVirtueData = async (virtueId) => {
    const virtueData = await getVirtueData(virtueId)
    await this.setState(state => {
      return {
        virtueData
      }
    })
  }

  updateVirtueData = async (virtueId, value) => {
    let lastValue = await this.getLastValue(virtueId)
    await addVirtueData(virtueId, lastValue + value)
    await this.setState(state => {
      return {
        ...state,
        virtueData: getVirtueData(virtueId)
      }
    })
    setVirtueData(virtueId)
  }

  getLastValue = async (virtueId) => {
    const virtueData = await getVirtueData(virtueId, 1, 'desc')
    if (virtueData.length) {
      return virtueData[0].value
    } else {
      await addVirtueData(virtueId, 0)
    }
    return 0
  }

  render() {
    return (
      <VirtueContext.Provider value={{
        virtues: {
          ...this.state,
        },
        addNewVirtue: (userId, virtueName, virtueDescription) => this.addNewVirtue(userId, virtueName, virtueDescription),
        getVirtues: (userId) => this.getVirtues(userId),
        setVirtueData: (virtueId) => this.setVirtueData(virtueId),
        updateVirtueData: (virtueId, value) => this.updateVirtueData(virtueId, value)
      }}>
        {this.props.children}
      </VirtueContext.Provider>
    )
  }
}

export default VirtueProvider
