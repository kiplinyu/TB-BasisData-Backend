//dependencies dot env untuk `.env`
require('dotenv').config()

const cors = require('cors');

//Port yang diambil dari file .env atau bisa juga di set secara default
const PORT = process.env.PORT; // || 5000;

//dependencies express
const express = require('express');

//Declare express ke variabel app
const app = express();

const apotekerRoutes = require('./Routes/Apoteker')
const golonganRoutes = require('./Routes/Golongan')
const obatRoutes = require('./Routes/Obat')
const detailTransaksiRoutes = require('./Routes/DetailTransaksi')
const transaksiRoutes = require('./Routes/Transaksi')

// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

app.use(cors()); 

app.use(express.json());

app.use('/Apoteker', apotekerRoutes);
app.use('/Golongan', golonganRoutes);
app.use('/Obat', obatRoutes);
app.use('/Detail-Transaksi', detailTransaksiRoutes);
app.use('/Transaksi', transaksiRoutes);



app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})

//catatan: API == application programming interface 