const course = {
    coursename: "js in hindi",
        price: "999",
        courseInstructor: "Sanskar"
}

// course.courseInstructor

// const {courseInstructor} = course

// console.log(courseInstructor)//Sanskar

const {courseInstructor: instructor} = course
console.log(instructor)//Sanskar

// {
//     "name": "Sanskar",
//     "coursename": "js in hindi",
//     "price": "free"

// }