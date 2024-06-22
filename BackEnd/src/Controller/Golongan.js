const GolonganModels = require('../Models/Golongan');

//Menampilkan Semua Data Apoteker 
const getAllGolongan = async (req, res) => {
    try {
        const [data] = await GolonganModels.getAllGolongan();
    
        res.json({
            message: 'GET all Golongan success',
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
const createNewGolongan = async (req, res) => {
    const {body} = req;
    if(!body.golongan){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await GolonganModels.createNewGolongan(body);
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
const editDataGolongan = async (req, res) => {
    const {idGolongan} = req.params;
    const {body} = req;
    try {
        await GolonganModels.editDataGolongan(body, idGolongan);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idGolongan,
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

const deleteGolongan = async (req, res) => {
    const {idGolongan} = req.params;
    try {
        await GolonganModels.deleteGolongan(idGolongan);
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
    getAllGolongan,
    createNewGolongan,
    editDataGolongan,
    deleteGolongan
};