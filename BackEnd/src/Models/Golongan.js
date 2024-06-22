const sql = require("./Database");

//Function buat ngambil semua data dari golongan
const getAllGolongan = () => {
    const SQLQuery = 'SELECT * FROM Golongan_obat';

    return sql.execute(SQLQuery);
}

//Function Buat bikin data Golongan baru
const createNewGolongan = (body) => {
    const SQLQuery = `  INSERT INTO Golongan_obat 
                        (golongan)
                        VALUES 
                        ('${body.golongan}')`;

    return sql.execute(SQLQuery);
}

//Function buat edit data golongan
const editDataGolongan = (body, idGolongan) => {
    const SQLQuery = `  UPDATE Golongan_obat
                        SET 
                        golongan=  '${body.golongan}'
                        WHERE id_golongan=${idGolongan}`;

    return sql.execute(SQLQuery);
}

const deleteGolongan = (idGolongan) => {
    const SQLQuery = `DELETE FROM Golongan_obat WHERE id_golongan=${idGolongan}`;

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllGolongan,
    createNewGolongan,
    editDataGolongan,
    deleteGolongan
};
