import request from 'superagent';

function getAll (callback) {
    request.get('/api/products')
        .set('Accept', 'application/json')
        .end((error, response) => {
            callback(error, response.body);
        });
}

function getById (id, callback) {
    request.get(`/api/products/${id}`)
        .set('Accept', 'application/json')
        .end((error, response) => {
            callback(error, response.body);
        });
}

export default {
    getAll, getById
};
