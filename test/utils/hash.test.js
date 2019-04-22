const bcrypt = require('bcryptjs');

describe('bcrypt', () => {
    it('hashes a passord', () => {
        const password = 'password';
        return bcrypt.hash(password, 10)
            .then(hashedPassword => {
                return Promise.all([
                    Promise.resolve(hashedPassword),
                    bcrypt.hash(password, 10)
                ]);
            })
            .then(([hash1, hash2]) => {
                expect(hash1).not.toEqual(hash2);
            });
    });
})