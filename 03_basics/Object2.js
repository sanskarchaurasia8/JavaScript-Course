//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "___sansu_1425"
tinderUser.name = "Sanskar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);//{ id: '___sansu_1425', name: 'Sanskar', isLoggedIn: false }

const regularUser = {
    email: "Sanskar@google.com",
    fullname:{
        userfullname:{
          firstname: "Sanskar",
          lastname: "Chaurasia"  
        }
    }
}

// console.log(regularUser.fullname);//{ userfullname: { firstname: 'Sanskar', lastname: 'Chaurasia' } }
// console.log(regularUser.fullname.userfullname);//{ firstname: 'Sanskar', lastname: 'Chaurasia' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj5 = {...obj1, ...obj2}
// console.log(obj3)
// console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);//{ id: '___sansu_1425', name: 'Sanskar', isLoggedIn: false }

// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.entries(tinderUser));//[[ 'id', '___sansu_1425' ],[ 'name', 'Sanskar' ], [ 'isLoggedIn', false ]]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true
console.log(tinderUser.hasOwnProperty('isLogged'))//false