<template>
  <div>详情页面</div>
</template>
<script>
export default {
  // created () { this.$route.query.xxx this.$route.query.xxx }
  async asyncData(context) {
    let id = context.query.bookId;
    let {
      status: status,
      data: { code, template, press }
    } = await context.$axios.post("/products/detail", {
      params: {
        bookId: id
      }
    })

    if (status === 200) {
      console.log("接口返回")
      console.log(code)
      console.log(template)
      console.log(press)
    }
  }
};
</script>
