export const userValidation = (name) => {
    //make some call
    var n = name;
    // setTimeout((n) => console.log(`user passed validation`),500 )
    return {userName:name, isPass:true}

}

export const fetchData = (name) => {
    //make some call
    var n = name;
    // setTimeout((n) => console.log(`fetch user data success`),500 )
    return {userName:name, isPass:true, userData: "user info"}

}