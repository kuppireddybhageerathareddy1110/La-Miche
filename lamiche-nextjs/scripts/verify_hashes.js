const bcrypt = require('bcryptjs');

const password = 'Admin@1234';
const hash = '$2a$12$k.ygBZPLuX1FLqjKJjJbGOoZt5rWJPmU4g8IobL4A.0z8TP1vIDsi';

bcrypt.compare(password, hash, (err, res) => {
  console.log('Admin password match:', res);
});

const userPassword = 'User@1234';
const userHash = '$2a$12$h5KqbY4vJlT2Q4k3OzVQIuj0OtM7eN8JjmKG5KBdCTgjNj7TH6oQ2';

bcrypt.compare(userPassword, userHash, (err, res) => {
  console.log('User password match:', res);
});
