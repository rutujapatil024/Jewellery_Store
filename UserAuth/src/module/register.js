const User = require("../model/user")

const registerUser = async (req,res) => {
    console.log(JSON.stringify(req.body))
    const { firstName, password, email, lastName, contactNumber} = req.body.formData;
    try {
        const isExistingUser = await User.exists({ email })
        if(isExistingUser) {
            return res.status(400).json({ message: 'User already exists'})
        }

        const user = new User({
            firstName,
            lastName,
            email,
            password,
            contactNumber,
            
        })

        await user.save();

        res.status(201).json({
            message: 'User registered successfully.',
            user: {
                firstName: user.firstName,
                email: user.email
            }
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = registerUser;