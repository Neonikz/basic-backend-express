import {response} from 'express';

const usersGet = (req, res = response) => {

    const {query,name = 'No name',apiKey,page = 1,limit} = req.query;

    res.json({
        msg:'get API - controller',
        query,
        name,
        apiKey,
        page:Number(page),
        limit
    })
}

const usersPost = (req, res = response) => {

    const {name,age} = req.body;

    res.json({
        msg:'post API - controller',
        name,
        age
    })
}

const usersPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg:'put API - controller',
        id
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        msg:'patch API - controller'
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg:'delete API - controller'
    })
}


export {
    usersGet,
    usersPut,
    usersPatch,
    usersPost,
    usersDelete,
}