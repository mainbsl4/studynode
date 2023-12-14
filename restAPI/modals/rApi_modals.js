const { v4: uuidv4 } = require('uuid');

const rApiData = [
    {
        id: uuidv4(),
        email: 'main',
        password: '123',
        x : {
            xx: "xx"
        }
    },
    {
        id: uuidv4(),
        email: 'moon',
        password: '321',
        x : {
            xx: "xxx",
        }
    },
];


module.exports = rApiData;