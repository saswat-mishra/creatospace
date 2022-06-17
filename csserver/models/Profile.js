const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    reqSent: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"users",
        default: []
    },
    reqRecieved: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"users",
        default: []
    },

    connections: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"users",
        default: []
    },
    user:Object
})

module.exports = mongoose.model("Profiles", ProfileSchema);