const asyncwrapper =(asyncfn)=>{
    return (req,res,next)=>{
        asyncfn(req,res,next).catch(next);
    }
}
export default asyncwrapper;