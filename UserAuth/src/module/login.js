const user = require("../model/user");
const User = require("../model/user")


const loginUsers = async (req,res) => {

    const { contactNumber, password } = req.body.formData;
    
    const userExists = await User.exists({ contactNumber })

    if (!userExists) {
      return res.status(400).json({ message: 'User does not exists' });
    }

    const user = await User.findOne({ contactNumber });
    const succ = user.matchPassword(password); 
    if(succ) {
        res.json({
            message: 'Login successful',
            token: 'token',
        });
    } else {
        res.status(400).json({
            message: 'Invalid Credentials',
        });
    }

}

module.exports = loginUsers;