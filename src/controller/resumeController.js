const pool = require('../model');

const getAllCurriculum = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM resume');
        res.send(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on search.');
    }
};

module.exports = { getAllCurriculum };