const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => total + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
 return blogs.reduce((mostLiked, blog) => {
    return (mostLiked.likes || 0) > blog.likes ? mostLiked : blog
  }, {})
}

const mostBlogs = (blogs) => {
  const authorCounts = {}

  blogs.forEach(blog => {
    if (authorCounts[blog.author]) {
      authorCounts[blog.author]++
    } else {
      authorCounts[blog.author] = 1
    }
  })

  let mostBlogsAuthor = ''
  let mostBlogsCount = 0

  for (const author in authorCounts) {
    if (authorCounts[author] > mostBlogsCount) {
      mostBlogsAuthor = author
      mostBlogsCount = authorCounts[author]
    }
  }

  return {
    author: mostBlogsAuthor,
    blogs: mostBlogsCount
  }
}

const mostLikes = (blogs) => {
  const likesCount = blogs.reduce((count, blog) => {
    count[blog.author] = (count[blog.author] || 0) + blog.likes
    return count
  }, {})

  const topAuthor = Object.keys(likesCount).reduce((top, author) => {
    return likesCount[author] > (likesCount[top] || 0) ? author : top
  }, "")

  return {
    author: topAuthor,
    likes: likesCount[topAuthor]
  }
}

module.exports = {
  totalLikes,
  dummy,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
