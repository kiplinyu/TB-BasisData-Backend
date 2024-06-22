const sql = require("./Database");

//Function buat ngambil semua data dari apoteker
const getAllDetailTransaksi = () => {
    const SQLQuery = 'SELECT * from detail_transaksi;';

    return sql.execute(SQLQuery);
}

const idDetail = () => {
    const SQLQuery = `SET @id_transaksi = LAST_INSERT_ID()`;

    return sql.execute(SQLQuery);
}

//Function Buat bikin data apoteker baru
const createNewDetailTransaksi = (body) => {
    const SQLQuery = `  INSERT INTO detail_transaksi 
                        (id_transaksi, id_obat, jumlah_obat, harga_obat)
                        VALUES 
                        ('${body.id_transaksi}', '${body.id_obat}', '${body.jumlah_obat}', '${body.harga_obat}')`;

    return sql.execute(SQLQuery);
}

//Function buat edit data apoteke
const editDetailTransaksi = (body, idDetailTransaksi) => {
    const SQLQuery = `  UPDATE detail_transaksi 
                        SET 
                        id_transaksi=  '${body.id_transaksi}', id_obat='${body.id_obat}', 
                        jumlah_obat= '${body.jumlah_obat}', harga_obat= '${body.harga_obat}'
                        WHERE id_detail_transaksi=${idDetailTransaksi}`;

    return sql.execute(SQLQuery);
}

const deleteDetailTransaksi = (idDetailTransaksi) => {
    const SQLQuery = `DELETE FROM detail_transaksi WHERE id_detail_transaksi=${idDetailTransaksi}`;

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllDetailTransaksi,
    idDetail,
    createNewDetailTransaksi,
    editDetailTransaksi,
    deleteDetailTransaksi
};
