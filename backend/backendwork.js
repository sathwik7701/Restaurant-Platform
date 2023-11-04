import mysql from 'mysql2';

const pool = mysql.createPool({
    host : "127.0.0.1",
    user : "root",
    password : "MySQL",
    database : "restaurents"
}).promise()

export async function getAllRestaurents() {
    const result = await pool.query("select * from restaurant_list");
    return result[0];
}

export async function editRestaurent(id) {
    const single = await pool.query(`
    select * from restaurant_list where id = ${id}
    `)
    return single[0];
}

export async function deleteRestaurent(id) {
    const single = await pool.query(`
    delete from restaurant_list where id = ${id}
    `)
    return single[0];
}

export async function updateRestaurent(id, name, address, phone, email) {
    const upadted = await pool.query(`
    update restaurant_list set name = ?, address = ?, contact_phone = ?, contact_email = ? where id = ?;
    `, [name, address, phone, email, id]);
}

export async function creatRestaurent(name, address, phone, email) {
    const inserted = await pool.query(`
    insert into restaurant_list (name, address, contact_phone, contact_email) values (?, ?, ?, ?)
    `, [name, address, phone, email]);
    return inserted;
}
// const restaurents = await getAllRestaurents();
// const singleRestaurent = await editRestaurent(1);
// const createdResaturent = await creatRestaurent("ahmed india", "adilabad", "888792922", "info5@gmail.com");
// console.log(restaurents);
// console.log(singleRestaurent);
// console.log(createdResaturent);