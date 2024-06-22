const sql = require("./Database");

const getAllObat = () => {
    const SQLQuery = 'SELECT * FROM obat';

    return sql.execute(SQLQuery);
}

const createNewObat = (body) => {
    const SQLQuery = `  INSERT INTO obat (nama_obat, harga, khasiat, golongan, exp_date, jumlah_stok) VALUES
                        ('${body.nama_obat}', '${body.harga}', '${body.khasiat}', '${body.golongan}', '${body.exp_date}', '${body.jumlah_stok}')`;

    return sql.execute(SQLQuery);
}

const editDataObat = (body, idObat) => {
    const SQLQuery = `  UPDATE obat
                        SET 
                        nama_obat= '${body.nama_obat}', harga= '${body.harga}', khasiat= '${body.khasiat}', 
                        golongan= '${body.golongan}', exp_date= '${body.exp_date}', jumlah_stok= '${body.jumlah_stok}'
                        WHERE id_obat= ${idObat}`;

    return sql.execute(SQLQuery);
}


const deleteObat = (idObat) => {
    const SQLQuery = `DELETE FROM obat WHERE id_obat= ${idObat}`;

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllObat,
    createNewObat,
    editDataObat,
    deleteObat
};
