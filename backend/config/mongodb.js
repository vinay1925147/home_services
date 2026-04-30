import mongoose from "mongoose";

const connectDB = async () => {

    // mongoose.connection.on('connected', () => console.log("Database Connected"))
    // await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
     console.log(process.env.MONGODB_URI);
      try {
       await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("successfully connection");
        
      } catch (error) {
        console.log(error);
      }
}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.