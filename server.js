const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
const filieres = [
  {
    id: 1,
    UnitEnseignement: "Psychologique",
    nomFiliere: "PolyTechnique",
    population: "220",
    group: "groupe P1",
  },
  {
    id: 2,
    UnitEnseignement: "Psychologique",
    nomFiliere: "Architecture",
    population: "110",
    group: "groupe A1",
  },
  {
    id: 3,
    UnitEnseignement: "Psychologique",
    nomFiliere: "Mécanique",
    population: "140",
    group: "groupe M2",
  },
  {
    id: 4,
    UnitEnseignement: "psychologique",
    nomFiliere: "Electro-magnitique",
    population: "170",
    group: "groupe E1",
  },
  {
    id: 5,
    UnitEnseignement: "Physique",
    nomFiliere: "Préparatoire",
    population: "500",
    group: " groupe C1",
  },
];

const gEnseignement = [
  { title: "Physique", value: "Physique" },
  { title: "Psychologique", value: "Psychologique" },
  { title: "Mathématique", value: "Mathematique" },
];

const groupes = [
  { title: "Group 1", value: "Group1" },
  { title: "Group 2", value: "Group2" },
  { title: "Group 3", value: "Group3" },
  { title: "Group 4", value: "Group4" },
  { title: "Group 5", value: "Group5" }
];
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Cors headers middleWare
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

  next();
});
app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/api/filiere", function (req, res) {
  res.send(filieres);
});

app.delete("/api/filiere/:id", function (req, res) {
  filieres.forEach((element, index) => {
    if (element.id == req.params.id) {
      filieres.splice(index, 1);
    }
  });
  res.send(filieres);
});

app.put("/api/filiere/:id", function (req, res) {
  filieres.map((element, index) => {
    if (element.id == req.params.id) {
      filieres[index] = req.body;
    }
  });
  res.send(filieres);
});

app.post("/api/filiere", function (req, res) {
  filieres.push(req.body);
  res.send(filieres);
});

app.get("/api/g-enseignement", function (req, res) {
  res.send(gEnseignement);
});

app.get("/api/groupes", function (req, res) {
  res.send(groupes);
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
