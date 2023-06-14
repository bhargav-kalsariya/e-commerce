const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        console.log('connecting to database');
        await mongoose.connect(process.env.DB_CONNECTION_URL)
        console.log('connected successfully');

    } catch (error) {
        console.log(error);
    }
}
module.exports = dbconnect;