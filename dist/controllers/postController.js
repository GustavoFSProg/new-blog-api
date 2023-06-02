"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _client = require('@prisma/client');


var cloudinary = require('cloudinary')

var imagem = ''
var resultado = ''


const prisma = new (0, _client.PrismaClient)()

async function RegisterPost(req, res) {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    cloudinary.uploader.upload(_optionalChain([req, 'access', _ => _.file, 'optionalAccess', _2 => _2.path]), function (result, error) {
      imagem = result.secure_url
      resultado = result
      console.log(resultado)
    })

    const data = await prisma.posts.create({
      data: {
        title: req.body.title,
        image: imagem,
        text: req.body.text,
        desc: req.body.desc,
        likes: Number(req.body.likes),
        views: Number(req.body.views),
        author: req.body.author
      }
    })

    return res.status(201).send({ msg: "Success!", data })
  } catch (error) {
    return res.status(400).send({ msg: "Error!", error })
  }
}
async function getAllPosts(req, res) {
  try {
    const data = await prisma.posts.findMany()

    return res.status(201).send({ data })

  } catch (error) {

    return res.status(400).send({ msg: "Error!", error })

  }
}


exports. default = { getAllPosts, RegisterPost }