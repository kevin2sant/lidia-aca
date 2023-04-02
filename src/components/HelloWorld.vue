<template>
  <div class='row' id='app'>

    <div class='offset-md-4 col-md-4'>
        <div class='row principal-row' id='contentCreate' style='margin: 0px;'>
            <a class="btn btn-warning">Propiedades</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
