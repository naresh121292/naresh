var index = require('./index')
const express = require('express')
const app = express()
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    next()
});
index.configureProcessesToUse(4, 8881, app)
app.get('/test1',(req, res)=>{
    console.log(index.getMemoryUsage())
	index.log('process test1' + process.pid + ' says hello!')
	 res.json({} )
	res.end()
})

app.get('/test2',(req, res)=>{
	index.log('process test2' + process.pid + ' says hello!')
	 res.json({} )
	res.end()
})

app.get('/test3',(req, res)=>{
	index.log('process test3' + process.pid + ' says hello!')
	 res.json({} )
	res.end()
})

app.get('/test4',(req, res)=>{
	index.log('process test4' + process.pid + ' says hello!')
	 res.json({} )
	res.end()
})

app.get('/test5',(req, res)=>{
	index.log('process test5' + process.pid + ' says hello!')
	 res.json({} )
	res.end()
})