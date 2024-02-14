import jwt from "jsonwebtoken"
const jwtKey = "admin"

const validateToken = (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.jwt, jwtKey);
        req.body.user = decode.user._id
        next()
    } catch (error) {
        res.json({ message: error.message })
    }
}

export default validateToken 