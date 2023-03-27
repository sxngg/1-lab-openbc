export class Contact  {
    name = "";
    lastName = "";
    email = "";
    active = false;

    constructor(name,lastName,email,active){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.active = active;
    }
}