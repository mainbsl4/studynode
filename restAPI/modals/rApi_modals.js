const { v4: uuidv4 } = require('uuid');

const rApiData = [
    {
        id: uuidv4(),
        email: 'main',
        password: '123'
    },
    {
        id: uuidv4(),
        email: 'moon',
        password: '321'
    },
]


module.exports = rApiData;