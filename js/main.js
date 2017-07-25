// you will need to install via 'npm install jsonwebtoken' or in your package.json

var jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "http://10.146.99.29:3000";
var METABASE_SECRET_KEY = "5c476d018a50d11ed3c7f59e5f26191ea9d6750a81bbc5f43715efec011b152f";

var payload = {
  resource: { question: 185 },
  params: {}
};
var token = jwt.sign(payload, METABASE_SECRET_KEY);

var iframeUrl = METABASE_SITE_URL + "/embed/question/" + token + "#bordered=true&titled=true";