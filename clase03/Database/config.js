const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log("Conexión satisfactoria");
    } catch (e) {
        console.error(e);
    }
}

module.exports = { dbConnection }