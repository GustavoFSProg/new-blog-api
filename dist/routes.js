"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const routes = _express.Router.call(void 0, )

var _uploadConfig = require('./config/uploadConfig'); var _uploadConfig2 = _interopRequireDefault(_uploadConfig);
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _postController = require('./controllers/postController'); var _postController2 = _interopRequireDefault(_postController);

const upload = _multer2.default.call(void 0, _uploadConfig2.default)


routes.post('/register', upload.single('image'), _postController2.default.RegisterPost)
routes.get('/get-all-posts', _postController2.default.getAllPosts)

routes.get("/", (req, res) => {
  return res.status(200).send({ Message: ` App Running on Get` })
})

exports. default = routes