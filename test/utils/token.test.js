require('dotenv').config();
const { tokenize, untokenize } = require('../../lib/utils/token');

const jwt = require('jsonwebtoken');

xdescribe('jwt token', () => {
    it('can untokenize a token', () => {
         const token = tokenize({
             _id: '1234',
             email: 'test@test.com'
         });

         const obj = untokenize(token);

    expect(token).toEqual({
        _id: '1234',
        email: 'test@test.com'
    });
    });
});