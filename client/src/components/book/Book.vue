<template>
  <tr :class="{ hover: hover, 'book-row': true }"
       @mouseover="hover = true"
       @mouseleave="hover = false">
      <td class="title">{{book.title}}</td>
      <td class="pages">{{book.pages}}</td>
      <td class="author">{{book.author.name}}</td>
      <td><button @click="deleteBook({id: book.id})">X</button></td>
    </tr>
</template>

<script>
export default {
  name: 'book',
  props: ['book', 'deleteBook'],
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
  .book-row {
    padding: 15px;
    border: 1px solid lightblue;
  }

  .title {
    font-weight: bold;
  }

  .pages {
    font-style: italic;
  }

  .author {
    text-decoration: underline;
  }

  .hover {
    background: lightblue;
  }
</style>
