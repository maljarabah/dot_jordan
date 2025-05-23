const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const validator = require("validator")
const User = require("../models/userModel")

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
}

// login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        // validation
        if (!email || !password) {
            throw Error("All fields must be filled")
        }

        const user = await User.findOne({ email })
        if (!user) {
            throw Error("Incorrect email or password")
        }

        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            throw Error("Incorrect email or password")
        }

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// signup a user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        // validation
        if (!email || !password) {
            throw Error("All fields must be filled")
        }

        if (!validator.isEmail(email)) {
            throw Error("Email not valid")
        }

        if (!validator.isStrongPassword(password)) {
            throw Error("Password not strong enough")
        }

        if (await User.findOne({ email })) {
            throw Error("Email already in use")
        }

        // password hashing
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await User.create({ email, password: hash })

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = { signupUser, loginUser }
