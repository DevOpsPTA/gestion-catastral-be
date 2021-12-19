import JWTServices from 'jsonwebtoken';

//const { JWT_SECRET } = process.env;
const JWT_SECRET = 'a141d32e970fd0b08b71addadc4b5c14bb2a9c09df5342b56498c1c4705b038e'
/**
 *
 * @param {Number} _id user._id
 * @param {String} email user.email
 * @returns {String}
 */

function generateAccessToken(id, email) {
  return JWTServices.sign({ id, email }, JWT_SECRET, { expiresIn: '1d' });
}

/**
 *
 * @param {String} token
 * @returns {{ _id: Number, email: String }}
 */
function verifyAccessToken(token) {
  return JWTServices.verify(token, JWT_SECRET);
}

module.exports = {
  generateAccessToken,
  verifyAccessToken,
};