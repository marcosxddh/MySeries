angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('menu', {
      url: '/side-menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
  
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html',
      controller: 'welcomeCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('lembrar_senha', {
      url: '/lembrar_senha',
      templateUrl: 'templates/lembrar_senha.html',
      controller: 'lembrar_senhaCtrl'
    })
        
      
    
      
        
    .state('cadastro_usuario', {
      url: '/cadastro_usuario',
      templateUrl: 'templates/cadastro_usuario.html',
      controller: 'cadastro_usuarioCtrl'
    })
        
      
    
      
        
    .state('status_cadastro', {
      url: '/status_cadastro',
      templateUrl: 'templates/status_cadastro.html',
      controller: 'status_cadastroCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');

});