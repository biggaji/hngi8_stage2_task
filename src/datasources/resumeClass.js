const db = require("../../configs/db");
const nodemailer = require("nodemailer");

// create mail transport

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: `${process.env.MAIL}`,
        pass: `${process.env.MAIL_PASS}`
    }
});

class Contact {
    constructor() {}

    async saveMessageWithPhone(fullname,email,phone,msg) {
       let contact = await  db.query(`INSERT INTO resume_contacts(full_name, email, phone_no, message) VALUES($1,$2,$3,$4) RETURNING full_name, email, message `,[fullname,email,phone,msg]);

    //    alert me for new message
       this.alertMe(contact.rows[0].full_name, contact.rows[0].message);

    //    alert sender for my response
    //    get senders firstname
    let firstname = contact.rows[0].full_name.split(" ")[0];
       this.alertSender(firstname, contact.rows[0].email);
    };

    async saveMessageWithoutPhone(fullname,email,msg) {
       let contact = await  db.query(`INSERT INTO resume_contacts(full_name, email, message) VALUES($1,$2,$3) RETURNING full_name, email, message`,[fullname,email,msg]);

       //    alert me for new message
       this.alertMe(contact.rows[0].full_name, contact.rows[0].message);

        //    alert sender for my response
        //    get senders firstname
        let firstname = contact.rows[0].full_name.split(" ")[0];
        this.alertSender(firstname, contact.rows[0].email);

    };


    async alertMe(senderName, message) {

        let mailOptions = {
            from: `Tobi Ajibade Resume <noreply@bigg-resume.com>`,
            to: `herityjohnny14@gmail.com`,
            subject: `New Message from Resume`,
            html: `<p>Hey! Tobi, you have a new message from ${senderName} on your resume page.</p>
                   <p>Message Contents: ${message}</p>
            `
        };

        mailTransporter.sendMail(mailOptions, (err,res) => {
            if(err) {
                console.log(err);
            } else {
                console.log(`Mail sent to me`, res.response);
            }
        });

    };

    async alertSender(senderFirstName, email) {
        
        let mailOptions = {
            from: `Tobi Ajibade Resume <noreply@bigg-resume.com>`,
            to: `${email}`,
            subject: `Thank You For Contacting Me`,
            html: `
                <p>Hi ${senderFirstName}! Thanks for contacting me. I have recieved you message
                . I will reply you shortly.</p>
            `
        };
        
        mailTransporter.sendMail(mailOptions, (err,res) => {
            if(err) {
                console.log(err);
            } else {
                console.log(`Mail sent `, res.response);
            }
        });
    }
};

module.exports = Contact;