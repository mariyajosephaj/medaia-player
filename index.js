// import json server
const jsonServer = require('json-server')
// create server for Meadia Player
const MPServer = jsonServer.create()
// create middle ware to understand the data
const middleware = jsonServer.defaults()
// set route for json file
const route = jsonServer.router('db.json')
// to available app in port
const PORT = 3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Media Player server started at port ${PORT} and waiting for client response`);
    
})