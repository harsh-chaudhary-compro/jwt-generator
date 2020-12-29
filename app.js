var jwt = require("jsonwebtoken");
var fs = require("fs");
var privateKey = fs.readFileSync("private-key.pem");

jwt.sign(
  { aud: "78302619" },
  privateKey,
  {
    algorithm: "RS256",
    expiresIn: 300,
    issuer: "https://platform.com",
    keyid: "JcQNf4qZzcNuexo-WAF51udZ23OhcwhbnMFWe2Ic3sg",
  },
  function (err, token) {
    console.log(token);
  }
);
