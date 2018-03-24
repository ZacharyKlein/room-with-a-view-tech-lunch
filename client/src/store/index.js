import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authors: [],
    books: []
  },
  mutations: {
    addBookStore (state, payload) {
      state.books.push(payload.book)
    },
    addAuthorStore (state, payload) {
      state.authors.push(payload.author)
    },
    removeBookStore (state, payload) {
      state.books = state.books.filter(b => b.id !== payload.id)
    },
    removeAuthorStore (state, payload) {
      state.authors = state.authors.filter(a => a.id === payload.id)
      state.books = state.books.filter(b => b.author.id !== payload.id)
    },
    setBooks (state, payload) {
      state.books = payload.books
    },
    setAuthors (state, payload) {
      state.authors = payload.authors
    }
  }
})

export default store
