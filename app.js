/* https://github.com/celsiusoft/celsius-node-first-node-express*/

const express = require("express");
const app = express();
require('dotenv' ).config();
const port = process.env.PORT;

app.get('/me', (request, response) => {
    response.status(200).json({
        data:[
                {   id     : 1,
                    name   : 'Wilfredo Machado',
                    age    : 51,
                    country: 'Venezuela'
                },
                {   id     : 2,
                    name   : 'Yenny Machado',
                    age    : 52,
                    country: 'Venezuela'
                },
             ],
        verb: request.method
    })

})

app.post('/metas', (request, response) => {
    response.status(200).json({
        data:[
                {   id_hobby : 1,
                    hobbies     : 'View Films',
                },
                {   id_hobby : 2,
                    hobbies     : 'Coding Sites Web',
                },
                {   id_hobby : 3,
                    hobbies     : 'Family Share',
                },
            ],
        verb: request.method
    })
})

app.patch('/metas', (request, response) => {
    response.status(200).json({
        data:[
                {   id_goals : 1,
                    goals     : 'Finish Academlo Course',
                },
                {   id_goals : 2,
                    goals     : 'Improve Full Stack skills',
                },
             ],
        verb: request.method
    })
})
app.put('/business', (request, response) => {
    response.status(200).json({
        data:[
                {   id_company : 1,
                    company     : 'Google Company',
                },
                {   id_company : 2,
                    company     : 'Oracle Company',
                },                    
                {   id_company : 3,
                    company     : 'Academlo Academy',
                },
             ],
        verb: request.method
    })
 
})

app.listen(port, () => {
    console.log(`Server started at port : ${port}`)
})

