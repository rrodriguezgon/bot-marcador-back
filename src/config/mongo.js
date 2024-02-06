const mongoose = require("mongoose");

function connectBBDD() {
    if (mongoose.connection.readyState === 0) {
        try {
            // Connect to the MongoDB cluster
            mongoose.set("strictQuery", false);
            mongoose.connect(process.env.mongopath)
            .then(() => console.log(" Mongoose is connected"));
        } catch (e) {
            console.log(e);
            console.log("could not connect");
        }
    }
}

module.exports = connectBBDD;