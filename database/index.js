const pgp = require('pg-promise')()
const db = pgp({ 
    host: 'ec2-54-83-157-174.compute-1.amazonaws.com',
    port: 5432,
    database: 'danpf3k5e1grrp',
    user: 'vwzhygayfvbsfa',
    password: '776ee612bb6417a85fa5df21ad8c841397fe00c5a50e36e4dc7c61588f1cc568',
    ssl: { rejectUnauthorized: false },
    query_timeout: 5000
})

module.exports = {
    getProductsCollection(id) {
        const sql = `
            SELECT
                *
            FROM
                product
            WHERE $1 = collection_id
        `
        return db.any(sql, [id])
    },
    signup({ first_name, last_name, email, password }) {
        const sql = `
            INSERT INTO
                users(first_name, last_name, email, password)
            VALUES
                ($1, $2, $3, $4)
            RETURNING
                *
        `
        return db.one(sql, [ first_name, last_name, email, password ])
    },

    getAllCollections() {
        const sql = `
            SELECT
                *
            FROM 
                collection
        `
        return db.any(sql)
    },

    editCollection(name, photo_alt, photo_src, id) {
        const sql = `
            UPDATE
                collection
            SET
                name = $1,
                photo_alt = $2,
                photo_src = $3
            WHERE
                id = $4
            RETURNING
                *
        `
        return db.one(sql, [name, photo_alt, photo_src, id])
    }
}