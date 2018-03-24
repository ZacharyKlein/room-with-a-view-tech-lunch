import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authors: [],
    books: []
  },
  mutations: {
    addBookStore (state, {book}) {
      state.books.push(book)
    },
    addAuthorStore (state, {author}) {
      state.authors.push(author)
    },
    removeBookStore (state, {id}) {
      state.books = state.books.filter(b => b.id !== id)
    },
    removeAuthorStore (state, {id}) {
      state.authors = state.authors.filter(a => a.id === id)
      state.books = state.books.filter(b => b.author.id !== id)
    },
    setBooks (state, {books}) {
      state.books = books
    },
    setAuthors (state, {authors}) {
      state.authors = authors
    }
  }
})

export default store
