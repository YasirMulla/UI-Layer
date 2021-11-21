console.log("welcome to my channel");
console.log("welcome to my channel");


const role1: string = "ADMIN";

const role2 : string  = "GUEST";

const role3 : string = "PRACTIONER";



//let username='user'

//let password='pass123'




// object oriented way

let person = {

username: 'john',

password: 'pass123',

role: role1

}



// === compares value as well as type

if(person.role  ===  role1)

{

    console.log('person logged in is a admin')

}



if(person.role  ===  role2)

{

    console.log('person logged in is a guest')

}



if(person.role  ===  role3)

{

    console.log('person logged in is a practioner')

}