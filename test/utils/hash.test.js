const bcrypt = require('bcryptjs');
const { hash, compare }  = require('../../lib/utils/hash');

xdescribe('bcrypt', () => {
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

    it('can compare passwords', () => {
        const password = 'password';

        return hash(password)
            .then(hashedPassword => {
                return bcrypt.compare('password', hashedPassword);
            })
            .then(compareREsult => {
                expect(compareREsult).toBeTruthy();
            });
    });

    it('can compare bad passwords', () => {
        const password = 'password';

        return hash(password)
            .then(hashsedPassword => {
                return bcrypt.compare('password123', hashsedPassword);
            })
            .then(compareREsult => {
                expect(compareREsult).toBeFalsy();
            });
    });

    it('hashes a password async', async() => {
        const hashedPassword = await hash('password');
        expect(hashedPassword).toEqual(expect.any(String));
        expect(hashedPassword).not.toEqual('password');
    });



});