<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-header">
                <h3>Configurar</h3>
              </div>
              <div class="card-body">
                <CrudUpdate
                  v-if="list.length > 0"
                  :model="model"
                  :apiUrl="apiUrl"
                >
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
                      <label for="">Direccion</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.direccion"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Telefono</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.telefono"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Impresora</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.impresora"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Impresora URL</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.impresora_url"
                        class="form-control"
                        id=""
                      />
                    </div>
                  </div>
                </CrudUpdate>
                <CrudCreate v-else :model="model" :apiUrl="apiUrl">
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
                      <label for="">Direccion</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.direccion"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Telefono</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.telefono"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Impresora</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.impresora"
                        class="form-control"
                        id=""
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Impresora URL</label>
                      <input
                        type="text"
                        name=""
                        v-model="model.impresora_url"
                        class="form-control"
                        id=""
                      />
                    </div>
                  </div>
                </CrudCreate>
                <button  v-if="list.length > 0" @click="ImprimirTest()" class="btn btn btn-dark w-100">Imprimir pagina de prueba</button>
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
        nombre: "",
        direccion: "",
        documento: "",
        telefono: "",
        impresora: "",
        impresora_url: "",
      },
      apiUrl: "sucursals",
      page: "Configuracion",
      modulo: "Sucursal",
      list: [],
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
    async ImprimirTest(){
      let sucursal = this.model
      const res = await this.$printer.$post(sucursal.impresora_url+"test",sucursal);
      console.log(res)
    }
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {
          this.list = v[0];
          if (this.list.length > 0) {
            this.model = this.list[0];
          }
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
