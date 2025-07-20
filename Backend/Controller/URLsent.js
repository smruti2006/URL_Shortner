import URLShortner from "../Model/URLshort.js";
import cryptoRandomString from "crypto-random-string";
const id = cryptoRandomString({ length: 4 })
const CreateUrl = async (req, res) => {
    const id = cryptoRandomString({ length: 4 })
    const LURL = req.body.LURL
    const SURL = `/smruti/${id}`
    if (!LURL) {
        return res.status(401).json({ message: "Please Enter Your URL",URL:null })
    }
    const newURL = new URLShortner({
        LURL, SURL
    })
    await newURL.save();
    const SSURL=`https://urlsr.onrender.com/smruti/${id}`
    res.status(200).json({ message: "URL Short Succefully", URL: SSURL })
}
export default CreateUrl