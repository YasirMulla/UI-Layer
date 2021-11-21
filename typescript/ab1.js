console.log("welcome to my channel");
console.log("welcome to my channel");
var role1 = "ADMIN";
var role2 = "GUEST";
var role3 = "PRACTIONER";
//let username='user'
//let password='pass123'
// object oriented way
var person = {
    username: 'john',
    password: 'pass123',
    role: role1
};
// === compares value as well as type
if (person.role === role1) {
    console.log('person logged in is a admin');
}
if (person.role === role2) {
    console.log('person logged in is a guest');
}
if (person.role === role3) {
    console.log('person logged in is a practioner');
}
