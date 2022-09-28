const express = require("express");

const app = express();


app.get('/me', (request, response) => {
    try {
    response.status(200).json({
        data:[
                {   name   : 'Wilfredo Machado',
                    age    : 51,
                    country: 'Venezuela'
                },
                {   name   : 'Yenny Machado',
                    age    : 52,
                    country: 'Venezuela'
                },
             ],
        verb: request.method
    })
    } catch (err) {
        response.status(400).json({
            data:{
                   error   : 'Data Not Available',
                },
        })    
} 
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
app.put('/business/:id', (request, response) => {
    try {
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
    } catch (err) {
        console.error(`Error while updating programming language`, err.message);
        next(err);
      }
})

app.listen(8000, () => {
    console.log('Server started at port 8000')
})
