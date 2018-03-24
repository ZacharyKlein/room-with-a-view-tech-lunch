<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <book-create-form :authors="authors" />
    <br/><hr/>
    <book-list :books="books" />

    <br/><hr/>
    <author-create-form />

    <br/><hr/>
    <author-list :authors="authors" />

  </div>
</template>

<script>
import BookList from '@/components/book/BookList'
import BookCreateForm from '@/components/book/BookCreateForm'
import AuthorList from '@/components/author/AuthorList'
import AuthorCreateForm from '@/components/author/AuthorCreateForm'
import { mapMutations, mapActions } from 'vuex'

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
    ...mapActions([
      'loadAuthors',
      'loadBooks'
    ]),
    ...mapMutations([
      'addBookStore',
      'addAuthorStore',
      'removeBookStore',
      'removeAuthorStore'
    ])
  },
  created: function () {
    this.loadAuthors()
    this.loadBooks()
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
