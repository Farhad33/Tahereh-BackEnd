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
    }
}