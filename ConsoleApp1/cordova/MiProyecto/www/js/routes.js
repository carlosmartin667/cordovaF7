routes = [{
    path: '/',
    url: './index.html',
  },

  {
    path: '/sMemoria/',
    url: './pages/sMemoria.html',
  },
  {
    path: '/otrosComponentes/',
    url: './pages/otrosComponentes.html',
  },
  {
    path: '/vonneumann/',
    url: './pages/vonneumann.html',
  },
  {
    path: '/rom/',
    url: './pages/rom.html',
  },
  {
    path: '/bus/',
    url: './pages/bus.html',
  },
  {
    path: '/videos/',
    url: './pages/videos.html',
  },
  {
    path: '/discoDuro/',
    url: './pages/coponentesPC/discoDuro.html',
  },
  {
    path: '/memoriaflash/',
    url: './pages/coponentesPC/memoriaflash.html',
  },
  {
    path: '/perifericos/',
    url: './pages/coponentesPC/perifericos.html',
  },
  {
    path: '/procesador/',
    url: './pages/coponentesPC/procesador.html',
  },
  {
    path: '/tarjetaGrafica/',
    url: './pages/coponentesPC/tarjetaGrafica.html',
  },
  {
    path: '/tarjetaSonido/',
    url: './pages/coponentesPC/tarjetaSonido.html',
  },
  {
    path: '/pcHistoria/',
    url: './pages/pcHistoria.html',
  },
  {
    path: '/ram/',
    url: './pages/ram.html',
  },

  {
    path: '/procesadorMicro/',
    url: './pages/procesadorMicro.html',
  },
  {
    path: '/generacion1/',
    url: './pages/Generaciones/generacion1',
  },
  {
    path: '/generacion2/',
    url: './pages/Generaciones/generacion2',
  },
  {
    path: '/generacion3/',
    url: './pages/Generaciones/generacion3',
  },
  {
    path: '/generacion4/',
    url: './pages/Generaciones/generacion4',
  },
  {
    path: '/generacion5/',
    url: './pages/Generaciones/generacion5',
  },
  // Left View Pages
  {
    path: '/HISTORIA/',
    url: './pages/HISTORIA.html',
  },
  {
    path: '/ORDENADOR/',
    url: './pages/ORDENADOR.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [{
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve({
          componentUrl: './pages/request-and-load.html',
        }, {
          context: {
            user: user,
          }
        });
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
