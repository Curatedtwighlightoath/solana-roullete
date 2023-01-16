const db = require("../models");
const Entries = db.entries;
const Users = db.users;


exports.createExample = async function (req, res) {
    console.log(req.body);

    const user = await Users.create({ name: req.body.name, number: req.body.number });
    console.log(user)
    res.status(200).send({ message: 'Complete', username: user.name, favoriteNumber: user.number });
}

exports.createExampleE = async function (req, res) {
    console.log(req.body);

    const entry = await Entries.create({ text: req.body.text, user: req.body.user, time: Date() });
    console.log(entry)
    res.status(200).send({ message: 'Complete', username: entry.user, text: entry.text, id: entry.id });
}

exports.updateExample = async function (req, res) {
    console.log(req.body);
    const entry = await Entries.update({ text: req.body.text }, { where: { id: req.body.id, user: req.body.user}});
    console.log(entry);
    res.status(200).send({ message: 'Complete', username: entry.user, text: entry.text, id: entry.id });
}

exports.findOneExample = async function (req, res) {
    console.log(req.body);
    const entry = await Entries.findOne({ where: { id: req.body.id, user: req.body.user}});
    console.log(entry);
    res.status(200).send({ message: 'Complete', username: entry.user, text: entry.text, id: entry.id });
}

exports.findAllExample = async function (req, res) {
    console.log(req.body);
    let responseArray = [];
    const entryList = await Entries.findAll({ where: { user: req.body.user}});
    console.log(entryList.length);

    entryList.forEach(ele => responseArray.push({ text: ele.text, id: ele.id, time: ele.time }))
    res.status(200).send({ message: 'Complete', data: responseArray});
}