import { SQLite } from 'expo'
import uuid from 'uuid/v4'
export const db = SQLite.openDatabase('db.virtuous')

export const provisionDB = async () => {
  console.log("Provisioning DB")
  db.transaction(tx => {
    // tx.executeSql(`insert into virtues (userId, virtueName, virtueDescription) values ('will', 'Order', 'Be orderly');`)
    tx.executeSql(
      'create table if not exists users (id integer primary key not null, userName text, password text);'
    )
    tx.executeSql(
      'create table if not exists virtues (id integer primary key not null, userId integer, virtueName text, virtueDescription text);'
    )
    tx.executeSql(
      'create table if not exists virtueTracker (id integer primary key not null, virtueId integer, value integer);'
    )
  })
}

export const login = async (userName, password) => {
}

export const getVirtues = (userId) => {
  const query = `select * from virtues;`
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        query, [], (_, { rows }) => {
          return JSON.stringify(rows._array)
        }
      )
    })
  })
}

export const addVirtue = (userId, virtueName, virtueDescription) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `insert into virtues (userId, virtueName, virtueDescription) values (${userId}, ${virtueName}, ${virtueDescription})`,
        [],
        resolve(getVirtues(userId))
      )
    })
  })

  console.log("done")
}

export const deleteVirtue = (userId, virtueId) => {
  db.transaction(tx => {
    tx.executeSql(
      `delete from virtues where userId = ? and id = ?`, [userId, virtueId]
    )
  })
}

