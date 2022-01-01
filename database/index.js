const pgp = require('pg-promise')()
const db = pgp({ database: 'clothes-shop' })


module.exports = {
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