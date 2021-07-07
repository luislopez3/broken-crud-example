const express = require("express");
const router = express.Router();

let companies = [
    { id: 1, name: "Microsoft" },
    { id: 2, name: "Google" },
    { id: 3, name: "Shell" },
    { id: 4, name: "Apple" },
    { id: 5, name: "Exxon" },
  ];

router.get("/", (req, res) => {
  res.json(companies);
});

router.post("/", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).send("Company is required!");
  }
  const company = {
    id: companies.length + 1,
    company,
  };
  companies.push(company);
  res.status(201).json(company);
});

router.get(":id", (req, res) => {
  const id = req.params.id;
  const company = companies.find((company) => {
    return company.id === parseInt(id);
  });
  if (!company) {
    return res.status(404).send("Company not found!");
  }
  res.json(company);
});

router.patch(":id", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).send("Company is required!");
  }
  const id = req.params.id;
  const company = companies.find((company) => {
    return company.id === parseInt(id);
  });
  if (!company) {
    return res.status(404).send("Company not found!");
  }
  company.name = name;
  res.status(200).json(company);
});

router.delete(":id", (req, res) => {
  const id = req.params.id;
  const company = companies.filter((company) => {
    return company.id !== parseInt(id);
  });
  res.sendStatus(204);
});

module.exports = router;
