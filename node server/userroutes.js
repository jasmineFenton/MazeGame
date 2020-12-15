const { coll } = require("./config");
const express = require("express");
const router = express.Router();
const dbRtns = require("./dbroutines");
// define a default route to retrieve all users
router.get("/", async (req, res) => {
  try {
    let db = await dbRtns.loadDB();
    let users = await dbRtns.findAll(db, coll);
    res.status(200).send({ userdata: users });
  } catch (err) {
    console.log(err.stack);
    res.status(500).send("get all users failed - internal server error");
  }
});
//define a route to update a specifc user
router.put("/", async (req, res) => {
  let db = await dbRtns.loadDB();
  let user = req.body;
  console.log(user);
  let updateResults = await dbRtns.updateOne(
    db,
    coll,
    { email: user.email, password: user.password },
    { mazecompletions: user.mazecompletions }
  );
  updateResults.lastErrorObject.updateExisting
    ? res.status(200).send(`user updated`)
    : res.status(500).send(`Error updating user ${user.email}`);
});
module.exports = router;
