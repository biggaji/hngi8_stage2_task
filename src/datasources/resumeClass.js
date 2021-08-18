const db = require("../../configs/db");

class Contact {
    constructor() {}

    async saveMessageWithPhone(fullname,email,phone,msg) {
        db.query(`INSERT INTO resume_contacts(full_name, email, phone_no, message) VALUES($1,$2,$3,$4)`,[fullname,email,phone,msg]);
    };

    async saveMessageWithoutPhone(fullname,email,msg) {
        db.query(`INSERT INTO resume_contacts(full_name, email, message) VALUES($1,$2,$3)`,[fullname,email,msg]);
    };

    async alertMe(email) {

    }

    async alertSender(email) {
        
    }
};