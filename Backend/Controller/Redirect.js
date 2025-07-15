import URLShortner from "../Model/URLshort.js";
const Redirect = async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const shortcode=`/smruti/${id}`
    const af=await URLShortner.findOne({SURL:shortcode})
    console.log(af)
    if(!af){
        return res.status(401).json({message:"URL Not found"})
    }
    res.redirect(af.LURL)
}
export default Redirect;