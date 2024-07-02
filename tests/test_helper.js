const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
    title: "Which bear is the best bear",
    author: "Dwight Shrute",
    url: "http://bears.com",
    likes: 1000,
    id: "66719023c227cbd903e148f4"
    },
    {
    title: "My art",
    author: "Pam Beasely",
    url: "http://pambeasleyart.com",
    likes: 3,
    id: "66719023c227cbd903e148f6"
    },
    {
    title: "How to be the best boss",
    author: "Michael Scott",
    url: "http://myblogs.com",
    likes: 1,
    id: "66719023c227cbd903e148f3"
    },
    {
    title: "Practical jokes for the workplace",
    author: "Jim Halpert",
    url: "http://prankingdwight.com",
    likes: 5000,
    id: "66719023c227cbd903e148f5"
    },
    {
    title: "How to grow beets",
    author: "Dwight Shrute",
    url: "http://beets.com",
    likes: 20,
    id: "66719023c227cbd903e148f7"
    }
    ]

const nonExistingId = async () => {
  const blog = new Blog({  title: 'example', author: 'unknown', url: 'http://example.com', likes: 0})
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb, usersInDb,
}