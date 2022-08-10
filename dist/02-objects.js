var lastname = "Baila";
var user = {
    name: "Monster",
    age: 30,
    getMessage: function () {
        return "Hello " + lastname;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello " + lastname;
    }
};
console.log(user.getMessage());
