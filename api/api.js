import { SQLite } from 'expo'
export const db = SQLite.openDatabase('db.virtuous')

export const provisionDB = async (forceDrop = false) => {
  forceDrop && await dropTables()
  const checkProvision = `select * from users limit 1;`
  const dbExisits = await executeQuery(checkProvision).catch(err => {
    console.log("Provisioning Database.")
    Promise.all(
      executeQuery(`create table if not exists users (id integer primary key not null, userName text , password text);`),
      executeQuery(`create unique index users_userName on users (userName);`),
      executeQuery(`create table if not exists virtues (id integer primary key not null, userId integer, virtueName text, virtueDescription text);`),
      executeQuery(`create index virtues_userId on virtues (userId);`),
      executeQuery(`create table if not exists virtueTracker (id integer primary key not null, virtueId integer, value integer);`),
      executeQuery(`create index virtueTracker_userId on virtueTracker (virtueId);`),
    )
      .then(() => console.log('Provisioning complete.'))
  }
  )
}

const dropTables = () => {
  console.log('Dropping tables...')
  Promise.all(
    executeQuery(`drop table if exists users;`),
    executeQuery(`drop table if exists virtues;`),
    executeQuery(`drop table if exists virtueTracker;`)
  )
    .then(() => console.log('Tables droped.'))
    .catch(err => console.log(err))
}

export const login = (userName, password) => {
  return true
}

const executeQuery = (query) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(query, [], (_, { rows }) => {
        resolve(rows._array)
      }, (_, err) => reject(err))
    })
  })
}

export const createUser = (userName, password) => {
  const query = `insert into users (userName, password) values (${userName}, ${password});`
  return executeQuery(query)
    .catch(err => console.log(err))
}

export const getVirtues = (userName) => {
  const query = `
    select 
      v.* 
    from 
      virtues v;`
  return executeQuery(query)
    .catch(err => {
      console.log('err', err)
    })

}

export const addVirtue = async (userId, virtueName, virtueDescription) => {
  const query = `insert into virtues (userId, virtueName, virtueDescription) values (${userId}, '${virtueName}', '${virtueDescription}')`
  console.log(query)
  await executeQuery(query)
    .catch(err => console.log(err))
  return getVirtues(userId)
    .catch(err => console.log(err))
}

export const deleteVirtue = (userId, virtueId) => {
  db.transaction(tx => {
    tx.executeSql(
      `delete from virtues where userId = ? and id = ?`, [userId, virtueId]
    )
  })
}

