const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Usage: node mongo.js <password> [<title> <author> <url> <likes>]')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://samw0907:${password}@atlascluster.fjk6ysb.mongodb.net/bloglistApp?retryWrites=true&w=majority&appName=AtlasCluster`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

if (process.argv.length === 3) {

  Blog.find({}).then(result => {
    result.forEach(blog => {
      console.log(`${blog.title} by ${blog.author}, ${blog.url}, ${blog.likes}`)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 6) {

  const title = process.argv[3]
  const author = process.argv[4]
  const url = process.argv[6]
  const likes = parseInt(process.argv[6], 10)

  const blog = new Blog({
    title: title,
    author: author,
    url: url,
    likes: likes
  })

  blog.save().then(() => {
    console.log(`Added blog: ${title} by ${author}`)
    mongoose.connection.close()
  })
} else {
  console.log('Usage: node mongo.js <password> [<title> <author> <url> <likes>]')
  mongoose.connection.close()
}