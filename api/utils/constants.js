//variables that i will constantly be used all the time. startards is to use uppercase.
exports.URL = process.env.MONGODB_URI || "mongodb://localhost:27017/shoparoo";
exports.PORT = process.env.PORT || 4000;
exports.SECRET =  process.env.SECRET || 'super-secret-passphrase';