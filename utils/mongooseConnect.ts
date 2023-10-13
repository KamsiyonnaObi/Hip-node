import mongoose, { ConnectOptions } from "mongoose";

const connection: {
  [key: string]: any;
} = {};

async function dbConnect() {
  // Check if we have a connection to the database or if it's currently connecting or disconnecting
  if (connection.isConnected) {
    return;
  }

  // Using new db connection config
  const db = await mongoose.connect(process.env.MONGO_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
