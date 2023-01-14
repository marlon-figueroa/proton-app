<template>
  <AdminTemplate>
    <div slot="body">
      {{ user }}
    </div>
  </AdminTemplate>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: "Index",
    };
  },
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    this.$nextTick(() => {
      let user = localStorage.getItem('userAuth')
      this.user = JSON.parse(user)
    })
  }
};
</script>
