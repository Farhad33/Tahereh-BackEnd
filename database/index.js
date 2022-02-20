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
            WHERE 
                collection_id = $1
        `
        return db.any(sql, [id])
    },
    getProductsIdCollection(id) {
        const sql = `
            SELECT
                id
            FROM
                product
            WHERE $1 = collection_id
        `
        return db.any(sql, [id])
    },
    getProductsById(id) {
        const sql = `
            SELECT
                *
            FROM
                product
            WHERE $1 = id
        `
        return db.oneOrNone(sql, [id])
    },
    signup({ email, password }) {
        const sql = `
            INSERT INTO
                users(email, password)
            VALUES
                ($1, $2)
            RETURNING
                *
        `
        return db.one(sql, [email, password])
    },

    getAllCollections() {
        const sql = `
            SELECT
                *
            FROM 
                product
            WHERE
                is_collection = true
        `
        return db.any(sql)
    },

    getCollectionById(id) {
        const sql = `
            SELECT
                *
            FROM 
                product
            WHERE
                id = $1
        `
        return db.oneOrNone(sql, [id])
    },

    getAboutMe() {
        const sql = `
            SELECT
                *
            FROM
                product
            WHERE id = 0
        `
        return db.one(sql)
    },
    editProduct(name, photo_alt, photo_src, description, id) {
        if (photo_src) {
            const sql = `
                UPDATE
                    product
                SET
                    name = $1,
                    photo_alt = $2,
                    photo_src = $3,
                    description = $4
                WHERE
                    id = $5
                RETURNING
                    *
            `
            return db.one(sql, [name, photo_alt, photo_src, description, id])
        } else {
            const sql = `
                UPDATE
                    product
                SET
                    name = $1,
                    photo_alt = $2,
                    description = $3
                WHERE
                    id = $4
                RETURNING
                    *
            `
            return db.one(sql, [name, photo_alt, description, id])
            
        }
    },


}