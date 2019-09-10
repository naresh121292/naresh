# Neutrinos
    var neutrinos = require('naresh-neutrinos')
    const express = require('express')
    const app = express()
    //In below method 
    //first param is no of processes to use
    //second param indicates shared port to use
    neutrinos.configureProcessesToUse(4, 8881, app)

    app.get('/test',(req, res)=>{

        console.log(neutrinos.getMemoryUsage())

        //Logs with time_stamp and PID
        neutrinos.log("Hello from logger")

        res.json({"key":"value"})
        res.end()
    })
