const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const keys = require("../config/key");
const router = express.Router();

router.post("/validation", (req, res) => {
  const token = req.body.token;
  if (!token) {
    return res.json({ message: "no token provided" });
  } else {
    const client = new OAuth2Client(keys.clientId);
    async function verify(token) {
      const ticket = await client.verifyIdToken({
        idToken: token,
        iss: keys.issuer,
        audience: keys.clientId
      });
      const payload = ticket.getPayload();
    }
    verify(token)
      .then(() => {
        console.log("successfull");
        return res.json({ message: "verified" });
      })
      .catch(error => {
        if (error) {
          return res.json({ message: "invalid token" });
        } else {
          reject(error);
        }
      });
  }
});

module.exports = router;
