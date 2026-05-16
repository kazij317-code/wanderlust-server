// // -----------------------------Start: 52_2 ---------------------------------------
// // (12)st may use or not
// // const dns = require("node:dns");
// // dns.setServers(["8.8.8.8", "8.8.4.4"]);
// // (12)en then create .env file
// // (7)st
// const express = require('express')
// // (14) 
// const dotenv = require('dotenv')
// // (9)st connection string from mongodb
// const { MongoClient, ServerApiVersion } = require('mongodb');
// // (15)
// dotenv.config()
// // const uri = "mongodb+srv://wanderlast:GVTmEdbvoFg0nWlR@cluster0.wenolut.mongodb.net/?appName=Cluster0";
// // (16)commit previouse
// const uri = process.env.MONGODB_URI;
// // (9)en then create user and password
// const app = express()

// // const PORT = 5000
// // (17) then check using nodemon index.js and then (start: 52_3) go to wanderlast nextjs project and create page.jsx file creating add-destination folder in app folder. 
// const PORT = process.env.PORT

// // (10)st connection string from mongodb
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// // (10)en

// // (11)st connection string from mongodb
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// // (11)en then run command: nodemon index.js 

// // (8)st
// app.get('/', (req, res) =>{
//     res.send("Server is running fine")
// })
// // (8)en then check in browser and command: npm install mongodb and setup mongodb.


// app.listen(PORT, ()=> {
//     console.log(`Server running on port ${PORT}`);
    
// })
// // (7)en then in command: npm i nodemon and after install it command: nodemon index.js 
// // ---------------------End:52_2-(1) to () --------------------------------
// // -----------------------------Start: 52_3 ---------------------------------------

// const express = require('express')
// const dotenv = require('dotenv')
// // (18)
// const cors = require('cors')
// const { MongoClient, ServerApiVersion } = require('mongodb');

// dotenv.config()

// const uri = process.env.MONGODB_URI;
// const app = express()
 
// const PORT = process.env.PORT

// // (19)st
// app.use(cors())
// app.use(express.json());
// // (19)en and then run in command: npm i cors



// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });



// async function run() {
//   try {
    
//     await client.connect();

//     // (14)st create database for mongodb
//     const db = client.db("wanderlust");
//     const destinationCollection = db.collection("destinations")
//     // (14)en

//     // (15)st create API for data add/post
//     app.post('/destination', async (req, res) => {
//       const destinationData= req.body
//       console.log(destinationData);
//       const result = await destinationCollection.insertOne(destinationData)
//       res.json(result)// or res.send(result)
//     })
//     // (15)en then go to add-destination page in wanderlust client
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // (20)commit it and check to add and then (start: 52_4)  then go to wanderlust-client and create page.jsx creating destinations folder in creating add-destinations in app folder
//     // await client.close();
//   }
// }
// run().catch(console.dir);



// app.get('/', (req, res) =>{
//     res.send("Server is running fine")
// })


// app.listen(PORT, ()=> {
//     console.log(`Server running on port ${PORT}`);
    
// })
 
// // ---------------------End:52_3-(1) to () --------------------------------
// // -----------------------------Start: 52_4 ---------------------------------------
// const express = require('express')
// const dotenv = require('dotenv')

// const cors = require('cors')
// const { MongoClient, ServerApiVersion } = require('mongodb');

// dotenv.config()

// const uri = process.env.MONGODB_URI;
// const app = express()
// const PORT = process.env.PORT

// app.use(cors())
// app.use(express.json());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// async function run() {
//   try {
    
//     await client.connect();

//     // create database for mongodb
//     const db = client.db("wanderlust");
//     const destinationCollection = db.collection("destinations")
//     // ---------------------------
//     // (2)st create API for data get/display
//     app.get("/destination", async(req, res) => {
//       const result = await destinationCollection.find().toArray();
//       res.json(result);
//     })

//     // or
//     // app.get('/destination', async(req, res) =>{
//     //     const cursor = destinationCollection.find();
//     //     const result = await cursor.toArray();
//     //     res.send(result);
//     // })
//     // (2)en then go to destinations page in client----------------------------

//     // create API for data add/post
//     app.post('/destination', async (req, res) => {
//       const destinationData= req.body
//       console.log(destinationData);
//       const result = await destinationCollection.insertOne(destinationData)
//       res.json(result)// or res.send(result)
//     })
//     // ----------------------------
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//     // await client.close();
//   }
// }
// run().catch(console.dir);
// // --------------

// app.get('/', (req, res) =>{
//     res.send("Server is running fine")
// })


// app.listen(PORT, ()=> {
//     console.log(`Server running on port ${PORT}`);
    
// }) 
// // ---------------------End:52_4-(1) to () --------------------------------
// // -----------------------------Start: 52_5 ---------------------------------------
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const express = require('express')
// const dotenv = require('dotenv')

// const cors = require('cors')
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// dotenv.config()

// const uri = process.env.MONGODB_URI;
// const app = express()
// const PORT = process.env.PORT

// app.use(cors())
// app.use(express.json());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// async function run() {
//   try {
    
//     await client.connect();

//     // create database for mongodb
//     const db = client.db("wanderlust");
//     const destinationCollection = db.collection("destinations")
//     // ---------------------------
//     //create API for data get/display
//     app.get("/destination", async(req, res) => {
//       const result = await destinationCollection.find().toArray();
//       res.json(result);
//     })

//     // or
//     // app.get('/destination', async(req, res) =>{
//     //     const cursor = destinationCollection.find();
//     //     const result = await cursor.toArray();
//     //     res.send(result);
//     // })
//   //  ----------------------------

//     // create API for data add/post
//     app.post('/destination', async (req, res) => {
//       const destinationData= req.body
//       console.log(destinationData);
//       const result = await destinationCollection.insertOne(destinationData)
//       res.json(result)// or res.send(result)
//     })
//     // ----------------------------
// // (9)st create API for details data display
// app.get("/destination/:id", async(req, res) => {
//   const {id} = req.params
//   const result = await destinationCollection.findOne({_id: new ObjectId(id)})
//   res.json(result)
// })
// // or
// // app.get('/destination/:id', async(req, res) =>{
// //         const id = req.params.id;        
// //         const query ={
// //             _id: new ObjectId(id)
// //         }
// //         const result = await destinationCollection.findOne(query)        
// //         console.log('user id', id);        
// //         res.send(result);
// //     })
// // (9)en then check browser for single id and go to client [id] page--------------------------------------
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//     // await client.close();
//   }
// }
// run().catch(console.dir);
// // --------------

// app.get('/', (req, res) =>{
//     res.send("Server is running fine")
// })


// app.listen(PORT, ()=> {
//     console.log(`Server running on port ${PORT}`);
    
// }) 
// // ---------------------End:52_5-(1) to () --------------------------------
// // -----------------------------Start: 52_6 ---------------------------------------
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const express = require('express')
// const dotenv = require('dotenv')

// const cors = require('cors')
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// dotenv.config()

// const uri = process.env.MONGODB_URI;
// const app = express()
// const PORT = process.env.PORT

// app.use(cors())
// app.use(express.json());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// async function run() {
//   try {
    
//     await client.connect();

//     // create database for mongodb
//     const db = client.db("wanderlust");
//     const destinationCollection = db.collection("destinations")
//     // ---------------------------
//     //create API for data get/display
//     app.get("/destination", async(req, res) => {
//       const result = await destinationCollection.find().toArray();
//       res.json(result);
//     })

//     // or
//     // app.get('/destination', async(req, res) =>{
//     //     const cursor = destinationCollection.find();
//     //     const result = await cursor.toArray();
//     //     res.send(result);
//     // })
//   //  ----------------------------

//     // create API for data add/post
//     app.post('/destination', async (req, res) => {
//       const destinationData= req.body
//       console.log(destinationData);
//       const result = await destinationCollection.insertOne(destinationData)
//       res.json(result)// or res.send(result)
//     })
//     // ----------------------------
// // create API for details data display
// app.get("/destination/:id", async(req, res) => {
//   const {id} = req.params
//   const result = await destinationCollection.findOne({_id: new ObjectId(id)})
//   res.json(result)
// })
// // or
// // app.get('/destination/:id', async(req, res) =>{
// //         const id = req.params.id;        
// //         const query ={
// //             _id: new ObjectId(id)
// //         }
// //         const result = await destinationCollection.findOne(query)        
// //         console.log('user id', id);        
// //         res.send(result);
// //     })
// // --------------------------------------
// // (27)st create API for data edit
// app.patch("/destination/:id", async (req, res) => {
//   const {id} = req.params
//   const updatedData = req.body

//   const result = await destinationCollection.updateOne(
//     {_id: new ObjectId(id)}, 
//     {$set: updatedData}
//   )
//   res.json(result)

// })

// // ------
// // or
// // app.patch('/users/:id', async(req, res) =>{
// //           const id = req.params.id;
// //           // (6)st
// //           const filter = {
// //             _id: new ObjectId(id)
// //           }
// //           const modifiedUser = req.body;

// //           const updatedDocument = {
// //             $set: {
// //               name: modifiedUser.name,
// //               email: modifiedUser.email,
// //               role: modifiedUser.role
// //             }
// //           }
// //           const result = await userCollection.updateOne(filter, updatedDocument);
// //           res.send(result);
// // (27)en then go to client EditModal Page-------------------------------------------
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//     // await client.close();
//   }
// }
// run().catch(console.dir);
// // --------------

// app.get('/', (req, res) =>{
//     res.send("Server is running fine")
// })


// app.listen(PORT, ()=> {
//     console.log(`Server running on port ${PORT}`);
    
// }) 
// // ---------------------End:52_6-(1) to () --------------------------------
// // -----------------------------Start: 52_7 ---------------------------------------
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const express = require('express')
// const dotenv = require('dotenv')

// const cors = require('cors')
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// dotenv.config()

// const uri = process.env.MONGODB_URI;
// const app = express()
// const PORT = process.env.PORT

// app.use(cors())
// app.use(express.json());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// async function run() {
//   try {
    
//     await client.connect();

//     // create database for mongodb
//     const db = client.db("wanderlust");
//     const destinationCollection = db.collection("destinations")
//     // ---------------------------
//     //create API for data get/display
//     app.get("/destination", async(req, res) => {
//       const result = await destinationCollection.find().toArray();
//       res.json(result);
//     })

//     // or
//     // app.get('/destination', async(req, res) =>{
//     //     const cursor = destinationCollection.find();
//     //     const result = await cursor.toArray();
//     //     res.send(result);
//     // })
//   //  ----------------------------

//     // create API for data add/post
//     app.post('/destination', async (req, res) => {
//       const destinationData= req.body
//       console.log(destinationData);
//       const result = await destinationCollection.insertOne(destinationData)
//       res.json(result)// or res.send(result)
//     })
//     // ----------------------------
// // create API for details data display
// app.get("/destination/:id", async(req, res) => {
//   const {id} = req.params
//   const result = await destinationCollection.findOne({_id: new ObjectId(id)})
//   res.json(result)
// })
// // or
// // app.get('/destination/:id', async(req, res) =>{
// //         const id = req.params.id;        
// //         const query ={
// //             _id: new ObjectId(id)
// //         }
// //         const result = await destinationCollection.findOne(query)        
// //         console.log('user id', id);        
// //         res.send(result);
// //     })
// // --------------------------------------
// // create API for data edit
// app.patch("/destination/:id", async (req, res) => {
//   const {id} = req.params
//   const updatedData = req.body

//   const result = await destinationCollection.updateOne(
//     {_id: new ObjectId(id)}, 
//     {$set: updatedData}
//   )
//   res.json(result)

// })

// // ------
// // or
// // app.patch('/users/:id', async(req, res) =>{
// //           const id = req.params.id;
// //           // (6)st
// //           const filter = {
// //             _id: new ObjectId(id)
// //           }
// //           const modifiedUser = req.body;

// //           const updatedDocument = {
// //             $set: {
// //               name: modifiedUser.name,
// //               email: modifiedUser.email,
// //               role: modifiedUser.role
// //             }
// //           }
// //           const result = await userCollection.updateOne(filter, updatedDocument);
// //           res.send(result);
// // -------------------------------------------
// // (15)st create API for data delete
// app.delete('/destination/:id', async (req, res) =>{
//   const {id} = req.params;
//   const result = await destinationCollection.deleteOne({_id: new ObjectId(id)})
//   res.json(result)
// })
// // -----------
// // or
// // app.delete('/users/:id', async(req, res) =>{
// //         const id = req.params.id;
// //         const query = {
// //             _id: new ObjectId(id)
// //         }
// //         const result = await userCollection.deleteOne(query)
// //         res.send(result);
// //     })
// // (15) en then go to client DeleteAlert----------------------------------------


//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfuly connected to MongoDB!");
//   } finally {
    
//     // await client.close();
//   }
// }
// run().catch(console.dir);
// // --------------

// app.get('/', (req, res) =>{
//     res.send("Server is running fine")
// })


// app.listen(PORT, ()=> {
//     console.log(`Server running on port ${PORT}`);
    
// }) 
// // ---------------------End:52_7-(1) to () --------------------------------
// // -----------------------------Start: 53_6 ---------------------------------------
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const express = require('express')
// const dotenv = require('dotenv')

// const cors = require('cors')
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// dotenv.config()

// const uri = process.env.MONGODB_URI;
// const app = express()
// const PORT = process.env.PORT

// app.use(cors())
// app.use(express.json());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// async function run() {
//   try {
    
//     await client.connect();

//     // create database for mongodb
//     const db = client.db("wanderlust");
//     const destinationCollection = db.collection("destinations")

//     // (17)
//     const bookingCollection = db.collection("bookings")
//     // ---------------------------
//     //create API for data get/display
//     app.get("/destination", async(req, res) => {
//       const result = await destinationCollection.find().toArray();
//       res.json(result);
//     })

//     // or
//     // app.get('/destination', async(req, res) =>{
//     //     const cursor = destinationCollection.find();
//     //     const result = await cursor.toArray();
//     //     res.send(result);
//     // })
//   //  ----------------------------

//     // create API for data add/post
//     app.post('/destination', async (req, res) => {
//       const destinationData= req.body
//       // console.log(destinationData);
//       const result = await destinationCollection.insertOne(destinationData)
//       res.json(result)// or res.send(result)
//     })
//     // ----------------------------
// // create API for details data display
// app.get("/destination/:id", async(req, res) => {
//   const {id} = req.params
//   const result = await destinationCollection.findOne({_id: new ObjectId(id)})
//   res.json(result)
// })
// // or
// // app.get('/destination/:id', async(req, res) =>{
// //         const id = req.params.id;        
// //         const query ={
// //             _id: new ObjectId(id)
// //         }
// //         const result = await destinationCollection.findOne(query)        
// //         console.log('user id', id);        
// //         res.send(result);
// //     })
// // --------------------------------------
// // create API for data edit
// app.patch("/destination/:id", async (req, res) => {
//   const {id} = req.params
//   const updatedData = req.body

//   const result = await destinationCollection.updateOne(
//     {_id: new ObjectId(id)}, 
//     {$set: updatedData}
//   )
//   res.json(result)

// })

// // ------
// // or
// // app.patch('/users/:id', async(req, res) =>{
// //           const id = req.params.id;
// //           // (6)st
// //           const filter = {
// //             _id: new ObjectId(id)
// //           }
// //           const modifiedUser = req.body;

// //           const updatedDocument = {
// //             $set: {
// //               name: modifiedUser.name,
// //               email: modifiedUser.email,
// //               role: modifiedUser.role
// //             }
// //           }
// //           const result = await userCollection.updateOne(filter, updatedDocument);
// //           res.send(result);
// // -------------------------------------------
// // create API for data delete
// app.delete('/destination/:id', async (req, res) =>{
//   const {id} = req.params;
//   const result = await destinationCollection.deleteOne({_id: new ObjectId(id)})
//   res.json(result)
// })
// // -----------
// // or
// // app.delete('/users/:id', async(req, res) =>{
// //         const id = req.params.id;
// //         const query = {
// //             _id: new ObjectId(id)
// //         }
// //         const result = await userCollection.deleteOne(query)
// //         res.send(result);
// //     })
// // ---------------------------------------

// // (19)st create API for booking data
// app.post("/booking", async(req, res) => {
//   const bookingData = req.body;
//   const result = await bookingCollection.insertOne(bookingData)
//   res.json(result);
// })  
// // (19)en then go to BookingCard--------------------------------


//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfuly connected to MongoDB!");
//   } finally {
    
//     // await client.close();
//   }
// }
// run().catch(console.dir);
// // --------------

// app.get('/', (req, res) =>{
//     res.send("Server is running fine")
// })


// app.listen(PORT, ()=> {
//     console.log(`Server running on port ${PORT}`);
    
// }) 
// // ---------------------End:53_6-(1) to () --------------------------------
// // -----------------------------Start: 53_7 ---------------------------------------
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const express = require('express')
// const dotenv = require('dotenv')

// const cors = require('cors')
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// dotenv.config()

// const uri = process.env.MONGODB_URI;
// const app = express()
// const PORT = process.env.PORT

// app.use(cors())
// app.use(express.json());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// async function run() {
//   try {
    
//     await client.connect();

//     // create database for mongodb
//     const db = client.db("wanderlust");
//     const destinationCollection = db.collection("destinations")

    
//     const bookingCollection = db.collection("bookings")
//     // ---------------------------
//     //create API for data get/display
//     app.get("/destination", async(req, res) => {
//       const result = await destinationCollection.find().toArray();
//       res.json(result);
//     })

//     // or
//     // app.get('/destination', async(req, res) =>{
//     //     const cursor = destinationCollection.find();
//     //     const result = await cursor.toArray();
//     //     res.send(result);
//     // })
//   //  ----------------------------

//     // create API for data add/post
//     app.post('/destination', async (req, res) => {
//       const destinationData= req.body
//       // console.log(destinationData);
//       const result = await destinationCollection.insertOne(destinationData)
//       res.json(result)// or res.send(result)
//     })
//     // ----------------------------
// // create API for details data display
// app.get("/destination/:id", async(req, res) => {
//   const {id} = req.params
//   const result = await destinationCollection.findOne({_id: new ObjectId(id)})
//   res.json(result)
// })
// // or
// // app.get('/destination/:id', async(req, res) =>{
// //         const id = req.params.id;        
// //         const query ={
// //             _id: new ObjectId(id)
// //         }
// //         const result = await destinationCollection.findOne(query)        
// //         console.log('user id', id);        
// //         res.send(result);
// //     })
// // --------------------------------------
// // create API for data edit
// app.patch("/destination/:id", async (req, res) => {
//   const {id} = req.params
//   const updatedData = req.body

//   const result = await destinationCollection.updateOne(
//     {_id: new ObjectId(id)}, 
//     {$set: updatedData}
//   )
//   res.json(result)

// })

// // ------
// // or
// // app.patch('/users/:id', async(req, res) =>{
// //           const id = req.params.id;
// //           // (6)st
// //           const filter = {
// //             _id: new ObjectId(id)
// //           }
// //           const modifiedUser = req.body;

// //           const updatedDocument = {
// //             $set: {
// //               name: modifiedUser.name,
// //               email: modifiedUser.email,
// //               role: modifiedUser.role
// //             }
// //           }
// //           const result = await userCollection.updateOne(filter, updatedDocument);
// //           res.send(result);
// // -------------------------------------------
// // create API for data delete
// app.delete('/destination/:id', async (req, res) =>{
//   const {id} = req.params;
//   const result = await destinationCollection.deleteOne({_id: new ObjectId(id)})
//   res.json(result)
// })
// // -----------
// // or
// // app.delete('/users/:id', async(req, res) =>{
// //         const id = req.params.id;
// //         const query = {
// //             _id: new ObjectId(id)
// //         }
// //         const result = await userCollection.deleteOne(query)
// //         res.send(result);
// //     })
// // ---------------------------------------

// // (3)st create API for booking dat display
// app.get("/booking/:userId", async (req, res) => {
//   const {userId} = req.params;
//   // const result = await bookingCollection.find({userId: userId});
//   // (4) then go to client MyBookingPage
//   const result = await bookingCollection.find({userId: userId}).toArray();
//   res.json(result);
// })
// // (3)en then check browser localhost:5000/booking/any id


// // create API for booking add data
// app.post("/booking", async(req, res) => {
//   const bookingData = req.body;
//   const result = await bookingCollection.insertOne(bookingData)
//   res.json(result);
// })  
// // --------------------------------


//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfuly connected to MongoDB!");
//   } finally {
    
//     // await client.close();
//   }
// }
// run().catch(console.dir);
// // --------------

// app.get('/', (req, res) =>{
//     res.send("Server is running fine")
// })


// app.listen(PORT, ()=> {
//     console.log(`Server running on port ${PORT}`);
    
// }) 
// // ---------------------End:53_7-(1) to () --------------------------------
// -----------------------------Start: 53_8 ---------------------------------------
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require('express')
const dotenv = require('dotenv')

const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

dotenv.config()

const uri = process.env.MONGODB_URI;
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    
    await client.connect();

    // create database for mongodb
    const db = client.db("wanderlust");
    const destinationCollection = db.collection("destinations")

    
    const bookingCollection = db.collection("bookings")
    // ---------------------------
    //create API for data get/display
    app.get("/destination", async(req, res) => {
      const result = await destinationCollection.find().toArray();
      res.json(result);
    })

    // or
    // app.get('/destination', async(req, res) =>{
    //     const cursor = destinationCollection.find();
    //     const result = await cursor.toArray();
    //     res.send(result);
    // })
  //  ----------------------------

    // create API for data add/post
    app.post('/destination', async (req, res) => {
      const destinationData= req.body
      // console.log(destinationData);
      const result = await destinationCollection.insertOne(destinationData)
      res.json(result)// or res.send(result)
    })
    // ----------------------------
// create API for details data display
app.get("/destination/:id", async(req, res) => {
  const {id} = req.params
  const result = await destinationCollection.findOne({_id: new ObjectId(id)})
  res.json(result)
})
// or
// app.get('/destination/:id', async(req, res) =>{
//         const id = req.params.id;        
//         const query ={
//             _id: new ObjectId(id)
//         }
//         const result = await destinationCollection.findOne(query)        
//         console.log('user id', id);        
//         res.send(result);
//     })
// --------------------------------------
// create API for data edit
app.patch("/destination/:id", async (req, res) => {
  const {id} = req.params
  const updatedData = req.body

  const result = await destinationCollection.updateOne(
    {_id: new ObjectId(id)}, 
    {$set: updatedData}
  )
  res.json(result)

})

// ------
// or
// app.patch('/users/:id', async(req, res) =>{
//           const id = req.params.id;
//           
//           const filter = {
//             _id: new ObjectId(id)
//           }
//           const modifiedUser = req.body;

//           const updatedDocument = {
//             $set: {
//               name: modifiedUser.name,
//               email: modifiedUser.email,
//               role: modifiedUser.role
//             }
//           }
//           const result = await userCollection.updateOne(filter, updatedDocument);
 //           res.send(result);
// -------------------------------------------
// create API for data delete
app.delete('/destination/:id', async (req, res) =>{
  const {id} = req.params;
  const result = await destinationCollection.deleteOne({_id: new ObjectId(id)})
  res.json(result)
})
// -----------
// or
// app.delete('/users/:id', async(req, res) =>{
//         const id = req.params.id;
//         const query = {
//             _id: new ObjectId(id)
//         }
//         const result = await userCollection.deleteOne(query)
//         res.send(result);
//     })
// ---------------------------------------

// create API for booking dat display
app.get("/booking/:userId", async (req, res) => {
  const {userId} = req.params;
  
  const result = await bookingCollection.find({userId: userId}).toArray();
  res.json(result);
})



// create API for booking add data
app.post("/booking", async(req, res) => {
  const bookingData = req.body;
  const result = await bookingCollection.insertOne(bookingData)
  res.json(result);
})  
// --------------------------------
// (4)st create API for delete booking data
app.delete('/booking/:bookingId', async (req, res) => {
  const {bookingId} = req.params;
  const result = await bookingCollection.deleteOne({_id: new ObjectId(bookingId)})

  res.json(result)
})
// (4)en then create components/BookingCancelAlert.jsx in client-------------------------------
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfuly connected to MongoDB!");
  } finally {
    
    // await client.close();
  }
}
run().catch(console.dir);
// --------------

app.get('/', (req, res) =>{
    res.send("Server is running fine")
})


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
    
}) 
// ---------------------End:53_7-(1) to () --------------------------------
