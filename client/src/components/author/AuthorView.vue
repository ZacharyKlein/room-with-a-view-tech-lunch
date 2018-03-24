<template>
  <div>
    <author-create-form />
    <br/><hr/>
    <author-list />
  </div>
</template>

<script>
import AuthorList from './AuthorList'
import AuthorCreateForm from './AuthorCreateForm'

export default {
  name: 'author-view',
  components: {
    AuthorList, AuthorCreateForm
  }
}
</script>

<style scoped>
  div {
    width: 1000px;
    margin: 0 auto;
  }
</style>
