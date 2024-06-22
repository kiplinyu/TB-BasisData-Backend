const ObatModels = require('../Models/Obat');

//Menampilkan Semua Data Apoteker 
const getAllObat = async (req, res) => {
    try {
        const [data] = await ObatModels.getAllObat();
    
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
const createNewObat = async (req, res) => {
    const {body} = req;
    if(!body.nama_obat || !body.harga || !body.khasiat || !body.golongan || !body.exp_date || !body.jumlah_stok){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await ObatModels.createNewObat(body);
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
const editDataObat = async (req, res) => {
    const {idObat} = req.params;
    const {body} = req;
    try {
        await ObatModels.editDataObat(body, idObat);
        res.json({
            message: 'UPDATE obat success',
            data: {
                id: idObat,
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

const deleteObat = async (req, res) => {
    const {idObat} = req.params;
    try {
        await ObatModels.deleteObat(idObat);
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
    getAllObat,
    createNewObat,
    editDataObat,
    deleteObat
};