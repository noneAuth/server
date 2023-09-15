const userExpress = require('express');
 const client = require('../db');
const router = userExpress.Router();

router.get("/", (req: any, res: any) => {
   console.log(client);
   
  res.send( JSON.stringify(client))
});

module.exports = router;