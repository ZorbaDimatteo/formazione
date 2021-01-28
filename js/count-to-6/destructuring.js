let userArray = process.argv.slice(2);
// let [ , username, email] = userArray;
/* let userData = {
    uName: username,
    uMail: email
}*/
let userData = {};
[, userData.uName, userData.uMail] = userArray;
console.log(`{ username: '${userData.uName}', email: '${userData.uMail}' }`);
