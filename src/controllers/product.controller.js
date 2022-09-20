import {getConnection, sql, queries} from '../database';

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllProducts);
    
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const createProduct = async (req, res) => {
    try {
        const {name, description, quantity} = req.body;
    
        if (!name || !description || !quantity) {
            return res.status(400).json({message: 'Please send all the fields'});
        }
        const pool = await getConnection();
        await pool.request()
        .input('name', sql.VarChar, name)
        .input('description', sql.Text, description)
        .input('quantity', sql.Int, quantity)
        .query(queries.createProduct)

        res.json({name, description, quantity});
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const getProductById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const product = await pool
    .request()
    .input('id', id)
    .query(queries.getProductById)

    res.send(product.recordset[0]);
}

export const deleteProductById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const deleted = await pool
    .request()
    .input('id', id)
    .query(queries.deleteProduct)

    res.sendStatus(204);
}

export const getTotalProducts = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries.getTotalProducts)

    res.json(result.recordset[0]['']);
}

export const updateProductById = async (req, res) => {
    const {name, description, quantity} = req.body;
    const {id} = req.params;

    if (!name || !description || !quantity) {
        return res.status(400).json({message: 'Please send all the fields'});
    }

    const pool = await getConnection();
    const result = await pool
    .request()
    .input('name', sql.VarChar, name)
    .input('description', sql.Text, description)
    .input('quantity', sql.Int, quantity)
    .input('id', sql.Int, id)
    .query(queries.updateProductById)

    res.json({name, description, quantity});

};