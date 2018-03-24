<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <book-create-form />
    <br/><hr/>
    <book-list  />

    <br/><hr/>
    <author-create-form />

    <br/><hr/>
    <author-list  />

  </div>
</template>

<script>
import BookList from '@/components/book/BookList'
import BookCreateForm from '@/components/book/BookCreateForm'
import AuthorList from '@/components/author/AuthorList'
import AuthorCreateForm from '@/components/author/AuthorCreateForm'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      msg: 'Welcome to the Library'
    }
  },
  methods: {
    ...mapActions([
      'loadAuthors',
      'loadBooks'
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
