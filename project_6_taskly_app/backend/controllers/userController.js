const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const validator = require("validator")
const User = require("../models/userModel")

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
}

// login a user
const loginUser = async (req, res) => {
    let { email, password } = req.body

    try {
        // validation
        if (!email || !password) {
            throw Error("All fields must be filled")
        }

        // convert email string to lower case
        email = email.toLowerCase()

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

        // retrieve user fullname
        const fullname = user.fullname

        res.status(200).json({ fullname, email, token })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// signup a user
const signupUser = async (req, res) => {
    let { fullname, email, password } = req.body

    try {
        // validation
        if (!fullname || !email || !password) {
            throw Error("All fields must be filled")
        }

        if (!validator.isEmail(email)) {
            throw Error("Email not valid")
        }

        if (!validator.isStrongPassword(password)) {
            throw Error("Password not strong enough")
        }

        // convert email string to lower case
        email = email.toLowerCase()

        if (await User.findOne({ email })) {
            throw Error("Email already in use")
        }

        // password hashing
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await User.create({ fullname, email, password: hash })

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ fullname, email, token })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = { signupUser, loginUser }
