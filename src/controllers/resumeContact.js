const Contact = require("../datasources/resumeClass");

exports.processForm = async (req,res) => {
    const { fullname, email, phone, msg } = req.body;

    try {
        let contact = new Contact();
        
        // get save data to database ,
    
        if(phone !== undefined) {
            contact.saveMessageWithPhone(fullname,email,phone,msg);
        } else {
            contact.saveMessageWithoutPhone(fullname,email,msg);
        }
    
        
    } catch (error) {
        console.log(`Failed to process form`, error);
    }

    res.json({
        "message": "Your data has been received successfully",
        "success" : true
    });
};