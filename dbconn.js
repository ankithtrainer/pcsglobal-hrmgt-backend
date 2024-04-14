const mongoose = require("mongoose");
//const server = 'mongodb+srv://ankithtrainer:rxFE04nLLqCtaBNO@pcs-global-hrmgt-db.npdtfwd.mongodb.net'; 


const dbconn = async () => {
    try {
        
        const connect = await mongoose.connect('mongodb+srv://alokhalder:mI1kYNQTBP7SULZg@cluster0.oilaxvf.mongodb.net/pcsglobaldb');
     
        //const connect = await mongoose.connect('mongodb+srv://ankithtrainer:rxFE04nLLqCtaBNO@pcs-global-hrmgt-db.npdtfwd.mongodb.net/pcsglobaldb');
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error in Connecting Database");
    }
};

module.exports = {
    dbconn
}
    
