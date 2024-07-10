<template>

  <section class="src-componentes-ingreso">
    <div class="jumbotron">
      <h2>Cotizacion Dolar</h2>
      <hr>
      <br>

      <form >
        
        <!-- Campo para Ingresar valor en pesos -->
        <div class="form-group">
          <label for="valorPesos">Valor en pesos</label>
          <input 
            id="valorPesos" 
            type="number" 
            class="form-control" 
            v-model.trim="formData.valorPesos"
            
          >
          <label for="valorDolar">Valor del dolar</label>
          <input 
            id="valorDolar" 
            type="number" 
            class="form-control" 
            v-model.trim="formData.valorDolar"
            
          >
          

          <p>La cotizacion actual del dolar para la venta es de  ${{ cotizaciones }} Pesos</p>
          <p>La ultima actualizacion se hizo el  {{ lastUpdate }} </p>
          
        </div>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="actualizarAutomatica"
            v-model="actualizarAutomatica"
          >
          <label class="form-check-label" for="actualizarAutomatica">Actualizar automáticamente</label>
        </div>
        

        
      </form>

      <br>
      

      <!-- Representacion del valorPesos -->
      <h4>Valor ingresado en Dolares</h4>
      <br>
      <p>El valor ingresado corresponde a {{ convertirDolar }} Usd</p>
      

      <hr>
      
      <br>
      <p>Respuestas Cuestionario : <br>
        1->B <br> 2->B <br> 3->C <br> 4->B <br> 5->C  </p>
    

    </div>
  </section>

</template>

<script>

import * as servicioCotizaciones from '@/servicios/cotizacionDolar.js';

  export default  {
    name: 'src-componentes-ingreso',
    props: [],
    beforeMount () {
      this.cargarCotizaciones()

    },

    data () {
      return {
        formData : this.getInitialData(),
        cotizaciones : [],
        lastUpdate : "",
        actualizarAutomatica: false,
      }
    },

    methods: {
      getInitialData() {
        return {
          valorPesos : 0,
          valorDolar : 0
        }
      },
     async cargarCotizaciones(){
      const cotizacion = await servicioCotizaciones.getValorDolar()
      this.cotizaciones = cotizacion

      const lastUpdate = await servicioCotizaciones.getLastUpdate()
      this.lastUpdate = lastUpdate
      
      
    
      

      }
    },

    computed: {
      convertirDolar(){
        //Si se ingresa un valor en el formulario manualmente pisa el valor del request del axios
        let valorDol = this.formData.valorDolar
        
        if(valorDol == 0){
          valorDol = this.cotizaciones
        }
        
        return this.formData.valorPesos / valorDol
      },
      mostrarAcutalizacion(){
        return this.actualizarAutomatica
      }
      //No llego a hacer la actualizacion automatica cada 2 segundos
      
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: white;
    color: rgb(106, 42, 165);
  }

  hr {
    background-color: #eee;
  }

  label {
      text-transform: capitalize;
  }
</style>
