import { connect } from "../mongodb/connect";

const findTest = async() => {
    let connection, cursor
    try {
        connection = await connect()
        const db = await connection.db('ch12-2')
        const personsCollection = db.collection('persons')
        const addressCollection = db.collection('addresses')
        
        cursor = personsCollection.find({name: 'Jack'})
        const foundPersons = await cursor.toArray()
        
        const _id = foundPersons[0]._id
        const result = await personsCollection.findOne({_id})
        console.log(result.age) // 나이만 출력
    } catch(e) {
        console.log(e.message)
    } finally {
        connection.close()
    }
}

findTest()