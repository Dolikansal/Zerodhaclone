const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Token Generation Helper Function
const createSecretToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_KEY || "YOUR_SECRET_KEY", {
        expiresIn: "3d",
    });
};

// Signup Controller
module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, username } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists", success: false });
        }
        
        // Password hash karo
        const hashedPassword = await bcrypt.hash(password, 12);
        
        const user = await User.create({ email, password: hashedPassword, username });
        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false, // development ke liye, production mein secure & sameSite config zaroori h
        });

        res.status(201).json({ message: "User signed in successfully", success: true, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", success: false });
    }
};

// Login Controller
module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required', success: false });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect password or email', success: false });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.json({ message: 'Incorrect password or email', success: false });
        }
        
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });

        res.status(200).json({ message: "User logged in successfully", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", success: false });
    }
};