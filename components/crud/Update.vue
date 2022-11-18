<template>
  <div>
    <JcLoader :load="load"></JcLoader>

      <div class="row">
        <div class="col-12">
          <slot name="body">

          </slot>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-6">
          <button class="btn btn-info w-100" @click="$router.back()">
            Regresar
          </button>
        </div>
        <div class="col-6">
          <button class="btn btn-dark w-100" @click="Save()">
            Actualizar
          </button>
        </div>
          </div>
        </div>

      </div>

  </div>
</template>

<script>
export default {

  props:{
    model:{
      type:Object,
      default:()=>{}
    },
    apiUrl:{
      type:String,
      default:''
    }

  },
  data() {
    return {
      load: false,

    };
  },
  methods: {
    async Save() {
      this.load = true;
      try {
        const res = await this.$api.$put(this.apiUrl+"/"+this.model.id, this.model);
        console.log(res);
        this.$swal
          .fire({
            title: "Actualizado!",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Ok",
          })
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.$router.back();
            }
          });
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    },
  },
  mounted() {
    this.$nextTick(async () => {
      try {
      } catch (e) {
        console.log(e);
      } finally {
      }
    });
  },
};
</script>
