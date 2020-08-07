const express = require('express')
const routers = express.Router()
const datagathered = require('../models/Routermodels')
const bcrypt = require('bcrypt')


routers.post('/register', async(request, response)=>{
    const saltit = await bcrypt.genSalt(10)
    const propassword = await bcrypt.hash(request.body.password, saltit)
    const tocollect = new datagathered({
        school : request.body.school,
        location: request.body.location,
        age: request.body.age,
        password: saltit
    })
    tocollect.save()
    .then(data=>{
        response.send(data)
    })
    .catch(error=>{
        response.send(error)
    })
})
module.exports = routers