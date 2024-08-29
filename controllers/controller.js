const asynchHandler = require("express-async-handler");
const { constants } = require("../constants");
const contacts = require("../")
//@get all data
const getAllData = asynchHandler((req, res) => {
    const Data = contacts.find()
    console.log('Data', Data);
    res.status(200).json({ data: Data });
})

//@get Single request by id
const getSingleData = asynchHandler((req, res, next) => {
    console.log('Request received');
    res.status(200).json({ data: `Detail data ${req.params.id}`});
})

//@post request
const createData = asynchHandler((req, res) => {
    console.log('Request received', req.body);
    const { fullName, contact, address } = req.body;
    if(!fullName || !contact || !address){
        return res.status(constants.VALIDATION_ERROR)
    }
    res.status(constants.SUCCESS).json({ data: `Posted successfully ${req.body}`});
})

//@update request
const updateData = asynchHandler((req, res) => {
    console.log('Request received');
    res.status(200).json({ data: `Updated successfully ${req.params.id}`});
})

//@delete request 
const deleteData = asynchHandler((req, res) => {
    console.log('Request received');
    res.status(200).json({ data: `Deleted successfully ${req.params.id}`});
})

module.exports = { getAllData, getSingleData, createData, updateData, deleteData };