import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Aguardando conexão com o banco de dados");

  mongoose
    .connect(
      process.env.MONGODB_URL,
    )
    .then(() => console.log("MongoDB Atlas conectado!"))
    .catch((error) => console.log(error));
};

export default connectDatabase;