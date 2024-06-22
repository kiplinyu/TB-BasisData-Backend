const sql = require("./Database");

//Function buat ngambil semua data dari apoteker
const getAllDataApoteker = () => {
    const SQLQuery = 'SELECT * FROM Apoteker';

    return sql.execute(SQLQuery);
}

//Function Buat bikin data apoteker baru
const createNewApoteker = (body) => {
    const SQLQuery = `  INSERT INTO Apoteker 
                        (nama_apoteker, alamat_apoteker, no_telp_apoteker, email_apoteker, password_apoteker, permission_apoteker)
                        VALUES 
                        ('${body.nama_apoteker}', '${body.alamat_apoteker}', '${body.no_telp_apoteker}', '${body.email_apoteker}', '${body.password_apoteker}', '${body.permission_apoteker}')`;

    return sql.execute(SQLQuery);
}

//Function buat edit data apoteker
const editDataApoteker = (body, idApoteker) => {
    const SQLQuery = `  UPDATE Apoteker 
                        SET 
                        nama_apoteker=  '${body.nama_apoteker}', alamat_apoteker='${body.alamat_apoteker}', 
                        no_telp_apoteker= '${body.no_telp_apoteker}', email_apoteker= '${body.email_apoteker}', 
                        password_apoteker= '${body.password_apoteker}', permission_apoteker= '${body.permission_apoteker}'
                        WHERE id_apoteker=${idApoteker}`;

    return sql.execute(SQLQuery);
}

const deteleApoteker = (idApoteker) => {
    const SQLQuery = `DELETE FROM Apoteker WHERE id_apoteker=${idApoteker}`;

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllDataApoteker,
    createNewApoteker,
    editDataApoteker,
    deteleApoteker
};
