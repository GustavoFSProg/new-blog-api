"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _md5 = require('md5'); var _md52 = _interopRequireDefault(_md5);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

 function encryptPassword(password) {
  return _md52.default.call(void 0, password, process.env.SECRET )
} exports.encryptPassword = encryptPassword;

 function isEmail(email) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
} exports.isEmail = isEmail;

 function isPassword(password) {
  const validade = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (validade.test(password)) return true
  return false
} exports.isPassword = isPassword;

 async function generateToken(data) {
  const { email, password } = data
  return _jsonwebtoken2.default.sign({ email, password }, process.env.SECRET , {
    expiresIn: '1d',
  })
} exports.generateToken = generateToken;

// export async function decodeToken(token) {
//   return jwt.decode(token,  process.env.SECRET as string & { asBytes: true }))
// }

 function verifyToken(token) {
  return (
    _jsonwebtoken2.default.verify(token, process.env.SECRET ),
    (error, decode) => {
      if (error) return { error } 
      return { decode } 
    }
  )
} exports.verifyToken = verifyToken;

// export async function isUser(data: any) {
//   const { email, password } = data
//   const user = await User.findOne(
//     password ? { email, password: encryptPassword(password) } : { email }
//   )
//   return user
// }

// export async function createUser(data: any) {
//   const user = await User.create({
//     name: data.name,
//     email: data.email,
//     avatar: data.avatar || null,
//     password: encryptPassword(data.password),
//   })
//   return user
// }

// export async function getCurrentUser(email: any) {
//   const currentUser = await User.findOne({ email })
//   return currentUser
// }
