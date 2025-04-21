const User= {
    _email:'ad@gma',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email= value
    }
}

const tea = Object.create(User) //crating object
console.log(tea.email);
