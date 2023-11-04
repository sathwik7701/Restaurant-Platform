import  express  from "express";
import cors from "cors";
import {
    getAllRestaurents,
    editRestaurent,
    creatRestaurent,
    deleteRestaurent,
    updateRestaurent
} from "./backendwork.js";

const app = express();
app.use(cors())

app.use(express.json());

// get the list of resuaturants on the database
app.get("/restaurents", async (req, res) => {
    const list_of_restautents = await getAllRestaurents();
    res.send({"list" : list_of_restautents});
});

app.delete('/restaurents/:id', async (req, res) => {
    const id = req.params.id;
    const createdR = await deleteRestaurent(id);
    res.status(204).send();
  });

// app.get("/restaurents/:id", async (req, res) => {
//     const id = req.params.id;
//     console.log("in app");
//     const singleRestaurent = await editRestaurent(id);
//     res.send({"only" : singleRestaurent});
// });

app.post("/restaurents", async (req, res) => {
    const {name, address, phone, email} = req.body;
    const createdR = await creatRestaurent(name, address, phone, email);
    res.status(201).send({"created one" : createdR});
});

app.put('/restaurents', async (req, res) => {
    const {id, name, address, phone, email} = req.body;
    const updateR = await updateRestaurent(id, name, address, phone, email);
    res.status(201).send({"udated" : updateR});
  });

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('something wrong');
});

app.listen(5000, () => {
    console.log("server is up");
})

// {
//     "name" : "s hotel",
//     "address" : "janna",
//     "phone" : "8899889988",
//     "email" : "sath@gmail.com"
// }