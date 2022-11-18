<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-md-center">
        <div class="col-lg-8 mx-auto">
          <div class="card mb-4">
            <div class="card-header p-3 pb-0">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Detalle de compra</h6>
                  <p class="text-sm mb-0">
                    Compra no. <b> {{model.id}}</b> de <b>{{model.fecha}} </b>
                  </p>

                </div>
               <button
                      @click="$router.back()"
                      class="btn bg-gradient-info btn-sm mb-0"
                    >
                      <i class="ni ni-bold-left"></i> Regresar
                    </button>
              </div>
            </div>
            <div class="card-body p-3 pt-0">
              <hr class="horizontal dark mt-0 mb-4" />
              <div class="row">
                <div class="col-12" v-for="m in model.compra_inventarios" >
                  <div class="d-flex">

                    <div>
                      <h6 class="text-lg mb-0 mt-2">{{m.inventario.articulo.nombre}}</h6>
                      <p class="text-sm mb-3">
                        {{Number(m.precio).toFixed(2)}} x {{m.cantidad}} {{m.inventario.articulo.medida.codigo}}
                      </p>
                      <span class="badge badge-sm bg-gradient-success"
                        > <i class="fas fa-barcode"></i> {{m.inventario.articulo.barra}}</span
                      >
                    </div>
                  </div>
                </div>

              </div>
              <hr class="horizontal dark mt-4 mb-4" />
              <div class="row">

                <div class="col-lg-8 col-md-6 col-12">

                  <h6 class="mb-3 mt-4">Información</h6>
                  <ul class="list-group">
                    <li
                      class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
                    >
                      <div class="d-flex flex-column">
                        <h6 class="mb-3 text-sm">Detalle de compra</h6>
                        <span class="mb-2 text-xs"
                          >Proveedor:
                          <span class="text-dark font-weight-bold ms-2"
                            >{{model.proveedor}}</span
                          ></span
                        >

                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-12 ms-auto">
                  <!-- <h6 class="mb-3">Información</h6> -->

                  <div class="d-flex justify-content-between mt-4">
                    <span class="mb-2 text-lg"> Total: </span>
                    <span class="text-dark text-lg ms-2 font-weight-bold"
                      >{{Number(model.total).toFixed(2)}}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </AdminTemplate>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: this.modulo,
    };
  },
  data() {
    return {
      load: true,

      model: {
       total:0,
       compra_inventarios:[]

      },
      apiUrl: "compras",
      page: "Compras",
      modulo: "Invoice",
      marcas:[],
      medidas:[],
      categorias:[],
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        await Promise.all([this.GET_DATA('compras/'+this.$route.params.id)]).then((v) => {
          this.model = v[0];
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    });
  },
};
</script>
