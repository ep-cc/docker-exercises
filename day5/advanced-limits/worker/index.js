const bcrypt = require('bcrypt');

async function work() {
  console.log('Generating hash');
  const rounds = 16;
  const salt = await bcrypt.genSalt(rounds);
  const hashedPassword = await bcrypt.hash('password', salt);
  console.log(hashedPassword);
}

work();
