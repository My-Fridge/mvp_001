const bodyParser = require("body-parser");
const userServices = require('./../routes/users/userServices');
const tokenService = require('./../utils/tokenService');


exports.handleBodyRequestParsing = router =>{
  router.use(bodyParser.urlencoded({extended:true}))
  router.use(bodyParser.json());
}

// exports.provideServiceToken = router =>{
//   router.use((req,res,next)=>{

//   })
// }