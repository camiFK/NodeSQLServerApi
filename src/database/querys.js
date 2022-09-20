export const queries = {
    getAllProducts: 'SELECT * FROM Products',
    createProduct: 'INSERT INTO products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductById: 'SELECT * FROM Products WHERE id = @id',
    deleteProduct: 'DELETE FROM Products WHERE id = @id',
    getTotalProducts: 'SELECT COUNT(*) FROM Products',
    updateProductById: 'UPDATE Products SET name = @name, description = @description, quantity = @quantity WHERE id = @id'
}