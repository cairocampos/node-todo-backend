require("dotenv").config({
    path: "./.env"
})

module.exports = {
    development: {
        username: process.env.DEV_USER_NAME,
        password:process.env.DEV_PASS,
        host: process.env.DEV_HOST,
        database: process.env.DEV_DATABASE,
        dialect: "mysql",
        define: {
            timestamps:true,
            underscored:true
        }
    },
    production: {
        username: process.env.USER_NAME,
        password:process.env.PASS,
        host: process.env.HOST,
        database: process.env.DATABASE,
        dialect: "mysql",
        define: {
            timestamps:true,
            underscored:true
        }
    }
}