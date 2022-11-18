<template lang="">
 <aside
      class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
      id="sidenav-main"
    >
      <div class="sidenav-header">
        <a
        class="navbar-brand m-0"
        href="/ventas"
        >
        <i
          class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
          <span class="ms-1 font-weight-bold">Punto de venta</span>
        </a>
      </div>
      <hr class="horizontal dark mt-0" />
      <div
        class="collapse navbar-collapse w-auto h-auto"
        id="sidenav-collapse-main"
      >
        <ul class="navbar-nav">

          <li class="nav-item mt-3">
            <h6
              class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
              ADMINISTRACI&oacute;N
            </h6>
          </li>
          <li class="nav-item">
            <a
              data-bs-toggle="collapse"
              href="#configuracion"
              class="nav-link"
              aria-controls="configuracion"
              role="button"
              aria-expanded="false"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <svg class="text-dark" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>settings</title> <g id="Basic-Elements" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Rounded-Icons" transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero"> <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)"> <g id="settings" transform="translate(304.000000, 151.000000)"> <polygon class="color-background" id="Path" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon> <path class="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" id="Path" opacity="0.596981957"></path> <path class="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z" id="Path"></path> </g> </g> </g> </g> </svg>
              </div>
              <span class="nav-link-text ms-1">Configuración</span>
            </a>
            <div class="collapse" id="configuracion">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/sucursal"
                  >
                    <span class="sidenav-mini-icon"> S </span>
                    <span class="sidenav-normal"> Sucursal </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/marcas"
                  >
                    <span class="sidenav-mini-icon"> M </span>
                    <span class="sidenav-normal"> Marcas </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/medidas"
                  >
                    <span class="sidenav-mini-icon"> M </span>
                    <span class="sidenav-normal"> Medidas </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/categorias"
                  >
                    <span class="sidenav-mini-icon"> C </span>
                    <span class="sidenav-normal"> Categorias </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/articulos"
                  >
                    <span class="sidenav-mini-icon"> A </span>
                    <span class="sidenav-normal"> Articulos </span>
                  </nuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a
              data-bs-toggle="collapse"
              href="#usuarios"
              class="nav-link"
              aria-controls="usuarios"
              role="button"
              aria-expanded="false"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <svg class="text-dark" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>settings</title> <g id="Basic-Elements" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Rounded-Icons" transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero"> <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)"> <g id="settings" transform="translate(304.000000, 151.000000)"> <polygon class="color-background" id="Path" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon> <path class="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" id="Path" opacity="0.596981957"></path> <path class="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z" id="Path"></path> </g> </g> </g> </g> </svg>
              </div>
              <span class="nav-link-text ms-1">Usuarios</span>
            </a>
            <div class="collapse" id="usuarios">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/usuarios/usuario"
                  >
                    <span class="sidenav-mini-icon"> U </span>
                    <span class="sidenav-normal"> Usuarios </span>
                  </nuxtLink>
                </li>

              </ul>
            </div>
          </li>
          <li class="nav-item mt-3">
            <h6
              class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
              INVENTARIO
            </h6>
          </li>
          <li class="nav-item">
            <a
              data-bs-toggle="collapse"
              href="#inventario"
              class="nav-link"
              aria-controls="inventario"
              role="button"
              aria-expanded="false"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
                <svg
                  width="12px"
                  height="12px"
                  viewBox="0 0 42 42"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>office</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-1869.000000, -293.000000)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <g transform="translate(1716.000000, 291.000000)">
                        <g
                          id="office"
                          transform="translate(153.000000, 2.000000)"
                        >
                          <path
                            class="color-background"
                            d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                            opacity="0.6"
                          ></path>
                          <path
                            class="color-background"
                            d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <span class="nav-link-text ms-1">Inventario</span>
            </a>
            <div class="collapse" id="inventario">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/inventario"
                  >
                    <span class="sidenav-mini-icon"> G </span>
                    <span class="sidenav-normal"> General </span>
                  </nuxtLink>
                </li>

              </ul>
            </div>
          </li>
          <li class="nav-item mt-3">
            <h6
              class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
              COMPRAS
            </h6>
          </li>
          <li class="nav-item">
            <a
              data-bs-toggle="collapse"
              href="#compra"
              class="nav-link"
              aria-controls="compra"
              role="button"
              aria-expanded="false"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <svg class="text-dark" width="16px" height="16px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>credit-card</title> <g id="Basic-Elements" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Rounded-Icons" transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero"> <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)"> <g id="credit-card" transform="translate(453.000000, 454.000000)"> <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" id="Path" opacity="0.593633743"></path> <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path> </g> </g> </g> </g> </svg>
              </div>
              <span class="nav-link-text ms-1">Compras</span>
            </a>
            <div class="collapse" id="compra">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/compras"
                  >
                    <span class="sidenav-mini-icon"> N </span>
                    <span class="sidenav-normal"> Nueva Compra </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/compras/lista"
                  >
                    <span class="sidenav-mini-icon"> C </span>
                    <span class="sidenav-normal"> Compras </span>
                  </nuxtLink>
                </li>

              </ul>
            </div>
          </li>
          <li class="nav-item mt-3">
            <h6
              class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
              VENTAS
            </h6>
          </li>
          <li class="nav-item">
            <a
              data-bs-toggle="collapse"
              href="#venta"
              class="nav-link"
              aria-controls="venta"
              role="button"
              aria-expanded="false"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <svg class="text-dark" width="16px" height="16px" viewBox="0 0 42 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>basket</title> <g id="Basic-Elements" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Rounded-Icons" transform="translate(-1869.000000, -741.000000)" fill="#FFFFFF" fill-rule="nonzero"> <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)"> <g id="basket" transform="translate(153.000000, 450.000000)"> <path class="color-background" d="M34.080375,13.125 L27.3748125,1.9490625 C27.1377583,1.53795093 26.6972449,1.28682264 26.222716,1.29218729 C25.748187,1.29772591 25.3135593,1.55890827 25.0860125,1.97535742 C24.8584658,2.39180657 24.8734447,2.89865282 25.1251875,3.3009375 L31.019625,13.125 L10.980375,13.125 L16.8748125,3.3009375 C17.1265553,2.89865282 17.1415342,2.39180657 16.9139875,1.97535742 C16.6864407,1.55890827 16.251813,1.29772591 15.777284,1.29218729 C15.3027551,1.28682264 14.8622417,1.53795093 14.6251875,1.9490625 L7.919625,13.125 L0,13.125 L0,18.375 L42,18.375 L42,13.125 L34.080375,13.125 Z" opacity="0.595377604"></path> <path class="color-background" d="M3.9375,21 L3.9375,38.0625 C3.9375,40.9619949 6.28800506,43.3125 9.1875,43.3125 L32.8125,43.3125 C35.7119949,43.3125 38.0625,40.9619949 38.0625,38.0625 L38.0625,21 L3.9375,21 Z M14.4375,36.75 L11.8125,36.75 L11.8125,26.25 L14.4375,26.25 L14.4375,36.75 Z M22.3125,36.75 L19.6875,36.75 L19.6875,26.25 L22.3125,26.25 L22.3125,36.75 Z M30.1875,36.75 L27.5625,36.75 L27.5625,26.25 L30.1875,26.25 L30.1875,36.75 Z"></path> </g> </g> </g> </g> </svg>
              </div>
              <span class="nav-link-text ms-1">Ventas</span>
            </a>
            <div class="collapse" id="venta">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/ventas"
                  >
                    <span class="sidenav-mini-icon"> N </span>
                    <span class="sidenav-normal"> Nueva venta </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/ventas/lista"
                  >
                    <span class="sidenav-mini-icon"> V </span>
                    <span class="sidenav-normal"> Ventas </span>
                  </nuxtLink>
                </li>

              </ul>
            </div>
          </li>
        </ul>
      </div>

    </aside>
</template>
