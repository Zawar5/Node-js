// const tinderUsers = new Object()

const tinderUsers = {}

tinderUsers.id = "123abc"
tinderUsers.name = "Zawar"
tinderUsers.isLogegdIn = false

// console.log(tinderUsers);

const regUser = {
    email: "zawar@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Muhammad",
            lastname: "Arshman"
        }
    }
}

// console.log(regUser.fullname?.userFullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "arsh@gmail.com"
    },
    {
        id: 1,
        email: "arsh1@gmail.com"
    },
    {
        id: 1,
        email: "arsh2@gmail.com"
    },
]


// console.log(users[2].email);

// console.log(tinderUsers);

// console.log(Object.keys(tinderUsers));

// console.log(Object.values(tinderUsers));

// console.log(Object.entries(tinderUsers));

// console.log(tinderUsers.hasOwnProperty('isLoggedIn'));

const course = {
    name: "JS Learning",
    price: 999,
    courseinstuctor: "Arsh"
}

// console.log(course.courseinstuctor);

const {courseinstuctor: instuctor} = course

console.log(instuctor);

// API gets the data in json format,

// {
//     "name": "Arsh"
//     "sourcename": "JS Learning"
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

// Random User me API = https://randomuser.me/

// json formatter to to formate and beautify the code and change its structure to tree to understand API's data 
// https://jsonformatter.org/