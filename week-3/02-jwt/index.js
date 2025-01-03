const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailschema = zod.string().email();
const passwrodschem = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailschema.safeParse(username);
  const passwordResponse = passwrodschem.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign({ username }, jwtPassword);
  return signature;
}

function verifyJwt(token) {
  // Your code here
  let ans = true;
  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    ans = false;
  }

  return ans;
}

function decodeJwt(token) {
  // Your code here
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
