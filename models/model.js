const mongoose = require('mongoose');

const schema = mongoose.schema({
    fullName: {
        type: 'string',
        required: [true, "Please enter a valid full name"]
    },
    contact: {
        type: 'string',
        required: [true, "Please enter a valid contact number"]
    },
    address: {
        type: 'string',
        required: [true, "Please enter a valid address"]
    },
},{
    timeStamp: true,
});

module.exports = mongoose.model('Data', schema);