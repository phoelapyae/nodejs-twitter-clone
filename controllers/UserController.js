const register = (req, res, next) => {
    res.send('Register!')
}

const login = (req, res, next) => {
    res.send('Login!')
}

const getUsers = (req, res, next) => {
    res.send('Hello Get Users!')
}

module.exports = {
    getUsers,
    register,
    login
}