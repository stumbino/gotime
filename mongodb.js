//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient;
//const ObjectId = mongodb.ObjectId;
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const {MongoClient, ObjectId} = require('mongodb')

// const id = new ObjectId();
// console.log(id);
MongoClient.connect(connectionURL, { useNewURLParser: true}, (error, client) => {
    if(error){
       return console.log("Unable to connect to database");
    }
    console.log("success");
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Billy',
    //     age: '24'
    // }, (error, result) => {
    //     if(error){
    //         return console.log('error inserting')
    //     }
    //     console.log('insert one')
    // })
    // db.collection('users').insertMany([{
    //    name: 'Justin',
    //    age:25 
    // },{
    //     name: 'Brice',
    //     age:24
    // }], (error, result) => {
    //     if(error){
    //         return console.log('unable to insert');
    //     }
    //     console.log(result.ops);
    // })
    db.collection('users').findOne({ name: 'Brice'}, (error, user) => {
        if(error){
            return console.log("cant find in database")
        }else if(user == null){
            return console.log("Cant find user")
        }
        console.log(user)
    })
})