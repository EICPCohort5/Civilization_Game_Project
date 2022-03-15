const connection = require('./db-connection');

async function testConnection() {
    try {
        await connection.authenticate();
        console.log('Successful connection');
        connection.close();
    } catch(err) {
        console.error('Database error:', err);
    }
}

testConnection();