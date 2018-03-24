<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <book-create-form :authors="authors" :addBook="addBook"  />
    <br/><hr/>
    <book-list :books="books" :removeBook="removeBook"  />

    <br/><hr/>
    <author-create-form :addAuthor="addAuthor" />

    <br/><hr/>
    <author-list :authors="authors" :removeAuthor="removeAuthor" />

  </div>
</template>

<script>
import BookList from '@/components/book/BookList'
import BookCreateForm from '@/components/book/BookCreateForm'
import AuthorList from '@/components/author/AuthorList'
import AuthorCreateForm from '@/components/author/AuthorCreateForm'
import { mapMutations } from 'vuex'

const headers = { 'Content-Type': 'application/json' }

export default {
  data () {
    return {
      msg: 'Welcome to the Library'
    }
  },
  computed: {
    books: {
      get () { return this.$store.state.books },
      set (books) { this.$store.commit('setBooks', {books}) }
    },
    authors: {
      get () { return this.$store.state.authors },
      set (authors) { this.$store.commit('setAuthors', {authors}) }
    }
  },
  methods: {
    ...mapMutations([
      'addBookStore',
      'addAuthorStore',
      'removeBookStore',
      'removeAuthorStore'
    ]),
    addBook: function (book) {
      fetch(`http://localhost:8080/book/`,
        { method: 'POST',
          headers,
          body: JSON.stringify(book)})
        .then(r => {
          if (r.status === 201) return r.json()
          else throw Error('Could not save book')
        })
        .then(book => this.addBookStore({book}))
        .catch(e => console.error(e))
    },
    addAuthor: function (author) {
      fetch(`http://localhost:8080/author/`,
        { method: 'POST',
          headers,
          body: JSON.stringify(author)})
        .then(r => {
          if (r.status === 201) return r.json()
          else throw Error('Could not save author')
        })
        .then(author => this.addAuthorStore({author}))
        .catch(e => console.error(e))
    },
    removeBook: function (id) {
      fetch(`http://localhost:8080/book/${id}`, {method: 'delete'})
        .then(r => {
          if (r.status === 204) this.removeBookStore({id})
        })
    },
    removeAuthor: function (id) {
      fetch(`http://localhost:8080/author/${id}`, {method: 'delete'})
        .then(r => {
          if (r.status === 204) this.removeAuthorStore({id})
        })
    }
  },
  created: function () {
    fetch(`http://localhost:8080/book`)
      .then(r => r.json())
      .then(json => {
        this.books = json
      })
      .catch(e => console.warn(e))

    fetch(`http://localhost:8080/author`)
      .then(r => r.json())
      .then(json => {
        this.authors = json
      })
      .catch(e => console.warn(e))
  },
  components: {
    'book-list': BookList,
    'book-create-form': BookCreateForm,
    'author-list': AuthorList,
    'author-create-form': AuthorCreateForm
  }
}
</script>

<style scoped>
  .hello {
    width: 1000px;
    margin: 0 auto;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
