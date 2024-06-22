const TransaksiModels = require('../Models/Transaksi');

//Menampilkan Semua Data Apoteker 
const getAllTransaksi = async (req, res) => {
    try {
        const [data] = await TransaksiModels.getAllTransaksi();
    
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
const createNewTransaksi = async (req, res) => {
    const {body} = req;
    if(!body.tanggal_transaksi || !body.id_apoteker || !body.total_penjualan){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await TransaksiModels.createNewTransaksi(body);
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
const editTransaksi = async (req, res) => {
    const {idTransaksi} = req.params;
    const {body} = req;
    try {
        await TransaksiModels.editTransaksi(body, idTransaksi);
        res.json({
            message: 'UPDATE obat success',
            data: {
                id: idTransaksi,
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

const deleteTransaksi = async (req, res) => {
    const {idTransaksi} = req.params;
    try {
        await TransaksiModels.deleteTransaksi(idTransaksi);
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
    getAllTransaksi,
    createNewTransaksi,
    editTransaksi,
    deleteTransaksi
};