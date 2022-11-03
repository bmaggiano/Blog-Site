const Blog = require("./Blogs")
const User = require("./User")


Blog.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

User.hasMany(Blog, {
    foreignKey: "user_id"
})