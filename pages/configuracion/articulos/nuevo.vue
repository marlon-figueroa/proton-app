<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-header">
                <h3>Agregar</h3>
              </div>
              <div class="card-body">
                <CrudCreate :model="model" :apiUrl="apiUrl">
                  <div slot="body" class="row">
                    <div class="form-group col-12">
                      <label for="">Nombre</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.nombre"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Codebar</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.barra"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-6">
                      <label for="">Marca</label>
                     <select name="" id="" class="form-control" v-model="model.marca_id">
                      <option v-for="m in marcas" :value="m.id">{{m.nombre}}</option>
                     </select>
                    </div>

                    <div class="form-group col-6">
                      <label for="">Categoria</label>
                     <select name="" id="" class="form-control" v-model="model.categoria_id">
                      <option v-for="m in categorias" :value="m.id">{{m.nombre}}</option>
                     </select>
                    </div>
                    <div class="form-group col-6">
                      <label for="">Unidad Medida</label>
                     <select name="" id="" class="form-control" v-model="model.medida_id">
                      <option v-for="m in medidas" :value="m.id">{{m.nombre}} - {{m.codigo}}</option>
                     </select>
                    </div>
                    <div class="form-group col-6">
                      <label for="">Stock minimo</label>
                      <input
                        type="text"
                        name=""
                        v-model.number="model.stock_minimo"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-6">
                      <label for="">Precio Compra</label>
                      <input
                        type="text"
                        name=""
                        v-model.number="model.compra"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-6">
                      <label for="">Precio Venta</label>
                      <input
                        type="text"
                        name=""
                        v-model.number="model.venta"
                        class="form-control"
                        id=""
                      />
                    </div>
                  </div>
                </CrudCreate>
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
      title: this.modulo
    };
  },
  data() {
    return {
      model: {
        nombre: "",
        barra: "",
        stock_minimo:0,
        compra:0,
        venta:0,
        marca_id:'',
        medida_id:'',
        categoria_id:'',
      },
      apiUrl: "articulos",
      page: "Configuracion",
      modulo: "Articulos",
      load:true,
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
        await Promise.all([this.GET_DATA('marcas'),this.GET_DATA('medidas'),this.GET_DATA('categorias')]).then((v) => {
          this.marcas = v[0];
          this.medidas = v[1];
          this.categorias = v[2];
          if(this.marcas.length){
            this.model.marca_id = this.marcas[0].id
          }
          if(this.medidas.length){
            this.model.medida_id = this.medidas[0].id
          }
          if(this.categorias.length){
            this.model.categoria_id = this.categorias[0].id
          }
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.load=false
      }
    });
  },
};
</script>
