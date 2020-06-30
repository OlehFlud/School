const bcrypt = require('bcrypt');

module.exports = async (password, hash) => {
 const compPassword = await bcrypt.compare(password, hash);

 return compPassword;
}
