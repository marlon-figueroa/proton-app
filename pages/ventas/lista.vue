<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-end">

          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <table class="table">
                  <thead>
                    <th class="py-0 px-1">#</th>
                    <th class="py-0 px-1">FECHA</th>
                    <th class="py-0 px-1">CLIENTE</th>
                    <th class="py-0 px-1">TOTAL</th>
                    <th class="py-0 px-1"></th>
                  </thead>
                  <tbody>
                    <tr v-for="(m, i) in list">
                      <td class="py-0 px-1">{{ i + 1 }}</td>
                      <td class="py-0 px-1">{{ m.fecha }}</td>
                      <td class="py-0 px-1">{{ m.cliente }}</td>
                      <td class="py-0 px-1">{{ m.total }}</td>
                      <td class="py-0 px-1">
                        <div class="btn-group">
                          <nuxtLink
                            :to="url_editar + m.id"
                            class="btn btn-info btn-sm py-1 px-2"
                          >
                            <i class="fas fa-eye"></i>
                          </nuxtLink>
                          <button
                            type="button"
                            @click="ImprimirVenta(m)"
                            class="btn btn-success btn-sm py-1 px-2"
                          >
                            <i class="fas fa-print"></i>
                          </button>
                          <button
                            type="button"
                            @click="Eliminar(m.id)"
                            class="btn btn-danger btn-sm py-1 px-2"
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  head() {
    return {
      title: this.modulo,
    };
  },

  data() {
    return {
      load: true,
      list: [],
      sucursals: [],
      apiUrl: "ventas",
      page: "Ventas",
      modulo: "Lista de ventas",
      sucursal:{

      },
      url_editar: "/ventas/invoice/",
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
    async EliminarItem(id) {
      this.load = true;
      try {
        const res = await this.$api.$delete(this.apiUrl + "/" + id);
        console.log(res);
        await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {
          this.list = v[0];
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    },
    Eliminar(id) {
      let self = this;
      this.$swal
        .fire({
          title: "Deseas Eliminar?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Eliminar",
          cancelarButtonText: `Cancelar`,
        })
        .then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            await self.EliminarItem(id);
          }
        });
    },
    async ImprimirVenta(venta){
      let sucursal = this.sucursal
      sucursal.venta = venta
      const res = await this.$printer.$post(sucursal.impresora_url+"venta",sucursal);
      console.log(res)
    }
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        await Promise.all([this.GET_DATA(this.apiUrl),this.GET_DATA('sucursals'),]).then((v) => {
          this.list = v[0];
          this.sucursals = v[1];
          if (this.sucursals.length > 0) {
            this.sucursal = this.sucursals[0];
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
