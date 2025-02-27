import servidor from "./servidor.js";

const puerto = 4100;

servidor.listen(puerto);
console.log("Servidor escuchando por el puerto: " + puerto);
/* mongodb+srv://alvarobahosc:<db_password>@cluster0.j3cnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */
