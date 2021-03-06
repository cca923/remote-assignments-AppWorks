const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.render("myName", { name });
  } else {
    res.redirect("/trackName");
  }
});

module.exports = router;
