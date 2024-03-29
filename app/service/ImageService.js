const Resize = require('./Resize');

const uploadImage = async () => {
    await handleUploadImage();
}

async function handleUploadImage(req, res) {
    const imagePath = path.join(__dirname, '/public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
        res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);

    return res.status(200).json({name: filename});
}

module.exports = uploadImage;