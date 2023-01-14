<template>
  <main class="main-content main-content-bg mt-0 ps">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div class="card card-plain mt-8">
                <div class="card-header pb-0 text-start">
                  <h3 class="font-weight-bolder text-info text-gradient">
                    Bienvenido
                  </h3>
                  <p class="mb-0">Ingresa tu email y tu password para iniciar.</p>
                </div>
                <div class="card-body">
                  <div role="form" class="text-start">
                    <label>Email </label>
                    <div class="mb-3">
                      <input type="text" v-model="model.email" class="form-control" placeholder="Email"
                        aria-label="Email" />
                    </div>
                    <label>Password</label>
                    <div class="mb-3">
                      <input type="password" v-model="model.password" class="form-control" placeholder="Password"
                        aria-label="Password" />
                    </div>

                    <div class="text-center">
                      <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0" @click="Login()">
                        Ingresar
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-md-6">
              <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  style="background-image: url('/assets/img/curved-images/curved7.jpg');"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="ps__rail-x" style="left: 0px; bottom: 0px">
      <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
    </div>
    <div class="ps__rail-y" style="top: 0px; right: 0px">
      <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px"></div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      model: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async Login() {
      try {
        const res = await this.$api.$post('login', this.model);
        let user = res
        if (user.hasOwnProperty('errors')) {
          this.$swal
            .fire({
              title: "Credenciales incorrectas",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Ok"

            })
        } else {
          localStorage.setItem('userAuth', JSON.stringify(user))
          this.$router.push('/ventas')
        }
      } catch (e) {
        console.log(e)
        this.$swal
          .fire({
            title: "No se puedo iniciar sesion",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Ok"
          })

      }
    }
  }
}
</script>
