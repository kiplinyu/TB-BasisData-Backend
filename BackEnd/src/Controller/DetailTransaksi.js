const DetailTransaksiModels = require('../Models/DetailTransaksi');

//Menampilkan Semua Data Apoteker 
const getAllDetailTransaksi = async (req, res) => {
    try {
        const [data] = await DetailTransaksiModels.getAllDetailTransaksi();
    
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
const createNewDetailTransaksi = async (req, res) => {
    const {body} = req;
    if(!body.id_transaksi || !body.id_obat || !body.jumlah_obat || !body.harga_obat){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await DetailTransaksiModels.createNewDetailTransaksi(body);
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
const editDetailTransaksi = async (req, res) => {
    const {idDetailTransaksi} = req.params;
    const {body} = req;
    try {
        await DetailTransaksiModels.editDetailTransaksi(body, idDetailTransaksi);
        res.json({
            message: 'UPDATE obat success',
            data: {
                id: idDetailTransaksi,
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

const deleteDetailTransaksi = async (req, res) => {
    const {idDetailTransaksi} = req.params;
    try {
        await DetailTransaksiModels.deleteDetailTransaksi(idDetailTransaksi);
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
    getAllDetailTransaksi,
    createNewDetailTransaksi,
    editDetailTransaksi,
    deleteDetailTransaksi
};