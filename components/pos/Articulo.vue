<template>
  <div class="card p-0" @click="AgregarCarrito()">
    <div class="card-header mx-4 mt-2 p-1 text-center">
      <div
        class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg"
      >
        <i class="fas fa-archive opacity-10" aria-hidden="true"></i>
      </div>
    </div>
    <div class="card-body pt-0 p-1 text-center">
      <h6 class="text-center mb-0 text-xxs">
        <i class="fas fa-barcode"></i> {{articulo.barra}}
      </h6>
      <span class="text-xs">{{ articulo.nombre }}</span>
      <hr class="horizontal dark my-2" />
      <h5 class="mb-0 text-sm">{{Number(articulo.compra).toFixed(2)}}</h5>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    articulo: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    AgregarCarrito(){
      this.$emit('AddCarrito',this.articulo)
    }
  },
};
</script>
