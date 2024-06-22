const sql = require("./Database");

//Function buat ngambil semua data dari apoteker
const getAllTransaksi = () => {
    const SQLQuery = 'SELECT * from transaksi;';

    return sql.execute(SQLQuery);
}


//Function Buat bikin data apoteker baru
const createNewTransaksi = (body) => {
    const SQLQuery = `  INSERT INTO transaksi 
                        (tanggal_transaksi, id_apoteker, total_penjualan)
                        VALUES 
                        ('${body.NOW()}', '${body.id_apoteker}', '${body.total_penjualan}')`;

    return sql.execute(SQLQuery);
}

const updateTransaksi = (body) => {
    const SQLQuery = `  UPDATE transaksi 
                        SET total_penjualan = (
                        SELECT SUM('${body.jumlah_obat}' * '${body.harga_obat}') 
                        FROM detail_transaksi 
                        WHERE id_transaksi = @id_transaksi
                        ) WHERE id_transaksi = @id_transaksi;`;

    return sql.execute(SQLQuery);
}

//Function buat edit data apoteker
const editTransaksi = (body, idTransaksi) => {
    const SQLQuery = `  UPDATE transaksi 
                        SET 
                        tanggal_transaksi=  '${body.tanggal_transaksi}', id_apoteker='${body.id_apoteker}', 
                        total_penjualan= '${body.total_penjualan}'
                        WHERE id_transaksi=${idTransaksi}`;

    return sql.execute(SQLQuery);
}

const deleteTransaksi = (idTransaksi) => {
    const SQLQuery = `DELETE FROM transaksi WHERE id_transaksi=${idTransaksi}`;

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllTransaksi,
    updateTransaksi,
    createNewTransaksi,
    editTransaksi,
    deleteTransaksi
};
