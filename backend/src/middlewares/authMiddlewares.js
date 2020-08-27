export function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        next();
    }else{
        res.send({isLogged:false});
    }
}