const mongoose = require('mongoose');


const yourSchema = new mongoose.Schema({
    // Your schema definition here
  });
  
  // Enable automatic index creation
  yourSchema.set('createIndexes', true);
  
  const YourModel = mongoose.model('YourModel', yourSchema);
const connectDB  = async () => {

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
           
    });

    console.log(`MongoDB Connected: ${conn}`);

}catch(errors) {
    console.log(`Error: ${errors.message}`);
    process.exit();
}

};

module.exports = connectDB;