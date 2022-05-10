let user = {
    id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age: 17,
    scores: { english: 10, math: 19.5, physics: 14 },
};
function addScore(obj, key, Value) {
    obj.scores[key] = Value;
    return obj;
}
console.log(addScore(user, "biology", 18));

function addRole(obj, role, status) {
    obj.roles.push(role);
    if (user.age < 18) {
        obj[status] = "very young";
    }
    return obj;
}
console.log(addRole(user, "classmate", "uerStatus"));

function convert(obj, fName, value) {
    let temp = Object.entries(obj);
    temp.push([fName, value])
    obj = Object.fromEntries(temp);
    return obj;
}
console.log(convert(user, "fatherName", "ali"));