class upload {
    static uploadMusic (req,res,next){
        const music = req.file ? req.file.cloudStoragePublicUrl : ''
        console.log(music)
        res.json({
             music
        })
    }
}

module.exports = upload