class User {
    username;
    _password;


    constructor(username, password) {
        this.username = username;
        this._password = password;
    }
    get password() {
        return this._password.replace(/./g, "*");
    }

    set password(newPassword) {
        if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
            console.error("Password must be at least 8 characters long and contain at least one digit and one capital letter");
            return;
        }
        this._password = newPassword;
    }

}
const user = new User("Shushil", "chaubey123")
console.log(user.password);

user.password = "weak";

console.log(user.password);