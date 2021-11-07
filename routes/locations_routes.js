const Location = require('../model/location')
const router = require('express').Router()

router.post('/regLoc', async (req, res)=>{
    const locObject = await Location.findOne({name: req.body.name})
    console.log(locObject)
    if(!locObject){
        const location = Location({
            name: req.body.name,
            latitude: req.body.lat,
            longitude: req.body.lon
        })
    
        try{
            const locUp = await location.save()
            res.status(200).json({result: locUp})
        }catch(error){
            res.status(210).json({message: error.message})
        }
    }else{
        res.json({message: 'device already exists'})
    }
})

router.patch('/updateLoc', async (req, res)=>{
    const query = {name: req.body.name}
    const updateDoc = {latitude: req.body.lat, longitude: req.body.lon}
    try {
        const resUpdate = await Location.findOneAndUpdate(query, updateDoc, {new: true, useFindAndModify: false})
        res.json({result: resUpdate})
        console.log('req served')
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get('/getter', (req, res)=>{
    res.send("routes work")
})

module.exports = router