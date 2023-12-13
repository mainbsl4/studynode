const middlewareOne = (req,res,next)=>{
  console.log("middleware");
  req.currentTime = new Date(Date.now());
  next();
};

module.exports = middlewareOne;