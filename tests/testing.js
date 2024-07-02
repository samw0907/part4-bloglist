console.log('Starting tests in testing.js');
const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const listWithMultipleBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'How to grow beets',
      author: 'Dwight Shrute',
      url: 'https://beets.com',
      likes: 15,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'How to be the best boss',
      author: 'Michael Scott',
      url: 'https://myblogs.com',
      likes: 1,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f10',
      title: 'Which bear is the best bear',
      author: 'Dwight Shrute',
      url: 'https://bears.com',
      likes: 10,
      __v: 0
    }
  ]

test('dummy returns one', () => {
  const blogs = []
  console.log('Running dummy test')

  const result = listHelper.dummy(blogs)
  console.log('Dummy function returned:', result)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
    console.log('Running total likes tests')
  
    test('when list has multiple blogs, equals the sum of likes', () => {
      console.log('Running total likes test')
      const result = listHelper.totalLikes(listWithMultipleBlogs)
      console.log('Total likes for listWithMultipleBlogs:', result)
      assert.strictEqual(result, 26)
    })
  })
  
describe('blog with most likes', () => {
    test('returns the blog with the most likes', () => {
      const result = listHelper.favoriteBlog(listWithMultipleBlogs)
      console.log('Blog with most likes:', result)
      assert.deepStrictEqual(result, listWithMultipleBlogs[0])
    })
  })
  
describe('most blogs by an author', () => {
    test('returns the author with the most blogs', () => {
      const result = listHelper.mostBlogs(listWithMultipleBlogs)
      console.log('Author with most blogs:', result)
      assert.deepStrictEqual(result, { author: 'Dwight Shrute', blogs: 2 })
    })
  })

describe('author with the most likes', () => {
    test('returns the author with the most likes', () => {
      const result = listHelper.mostLikes(listWithMultipleBlogs)
      console.log('Author with most likes:', result)
      assert.deepStrictEqual(result, { author: 'Dwight Shrute', likes: 25 })
    })
  })