const router = require('express').Router();
// We extended the sequelize Model class. On that class all the methods we need
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {});

// GET /api/users/1
router.get('/:id', (req, res) => {});

// POST /api/users
router.post('/', (req, res) => {});

// PUT /api/users/1
router.put('/:id', (res, req) => {});

// DELETE /api/users/1
router.delete('/:id', (res,req) => {});

module.exports = router;