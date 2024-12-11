// -- MONGODB. To run Mondo Shell, use command mongosh.  Its a Javascript Shell so you can use JS code
// default database is called test. check using command db
// To see current databases, command show dbs
// To create new database, use command use dataBaseName1. it won't show in show dbs.  after its created, running use dataBaseName1 will just start using it.

// Mongo stores data in BSON format (Binary JSON), i.e binary for speed

// To group data, use collections in Mongo. to create collection, use db.collectionName1  it will be created. to see collections use show collections

// When we insert in a collection that doesnt exist, the collection is created for us. Syntax: db.collectionName.insert({Array of Javascript Objects});  or you can also add single object (not array form)

// To see content of a collectin use command db.collectionName.find()   Technically it is short for db.collectionName.find({})  i.e it shows all object

// To actually find specific object use db.collectionName.find({key1: value1})  --> It will show all objects (called documents) which have key1: value1.  you can have multiple finding criteria (key value pairs) too

// Updating: 
    // For single update: db.collectionName.updateOne({finding criteria}, {$set:{keyName: NewValue} })  if the keyName doesn't exists, it will add the keyvalue pair instead of updating (what will it update if there is no key OFC)
    // For many update: db.colelctionName.updateMany({finding criteria}, {$set:{keyName: NewValue} })

    // (updateOne updates first object found matching criteria. updateMany updates all objects matching criteria)
    //  $currentDate: {dateKey1: true} creates (or sets) the dateKey1 to the current date

    // To replace Entire Object: db.collectionName.replaceOne({finding criteria}, {new Data}) can be used. Dont use $set It wipes out the Object compeltely and uses the data we provide to fill it up. Object ID remains the same

    // To deleteOne: db.collectionName.deleteOne({finding criteria})   deletes first match
    // To deleteMany: db.collectionName.deleteMany({finding criteria})  deletes all matches


// Additional Operators

    // To access Nested Objects in a documents, to access them in filter criteria, do:  {'key1.nestedKey1' : nestedValue1} dont forget the quotes. Vene if its nested in array and then object, we dont need brackets key1[0].nested bla

    // Comparison Operators:     (check syntax as needed)
                        //  $gt   : greater than                                    SYNTAX: db.collection.find({ key1: { $gt: val } })
                        //  $gte  : greater than equal to
                        //  $lt   : less than
                        //  $lte  : less than equal to
                        //  $in   : if it matches the values in the array.          SYNTAX: db.products.find({ type: { $in: ["Electronics", "Clothing"] } })
                        //  $nin  : opposite of $in
                        //  $or   : used for multiple filter conditions             SYNTAX: db.products.find({ $or: [ { type: "Electronics" }, { price: { $lt: 50 } } ] })