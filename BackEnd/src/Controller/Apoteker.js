const ApotekerModels = require('../Models/Apoteker');

//Menampilkan Semua Data Apoteker 
const getAllDataApoteker = async (req, res) => {
    try {
        const [data] = await ApotekerModels.getAllDataApoteker();
    
        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

//Membuat Data Apoteker Baru
const createNewApoteker = async (req, res) => {
    const {body} = req;
    if(!body.nama_apoteker || !body.alamat_apoteker || !body.no_telp_apoteker || !body.email_apoteker || !body.password_apoteker || !body.permission_apoteker){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await ApotekerModels.createNewApoteker(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}


//Function Edit data apoteker
const editDataApoteker = async (req, res) => {
    const {idApoteker} = req.params;
    const {body} = req;
    try {
        await ApotekerModels.editDataApoteker(body, idApoteker);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idApoteker,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deteleApoteker = async (req, res) => {
    const {idApoteker} = req.params;
    try {
        await ApotekerModels.deteleApoteker(idApoteker);
        res.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllDataApoteker,
    createNewApoteker,
    editDataApoteker,
    deteleApoteker
};