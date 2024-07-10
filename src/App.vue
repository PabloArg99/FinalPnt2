<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Final PNT2 - Pablo Toloza</h1>
      <br>
      <Cotizador />
      
    </div>
  </div>
</template>

<script>
import Cotizador from './componentes/Cotizador.vue';


export default {
  name: 'App',
  components: {
    Cotizador
  }
}
</script>

<style>
  h1 {
    color:rgb(106, 42, 165);
  }

  .jumbotron {
    padding-top: 40px;
    padding-bottom: 40px;
  }
</style>
