angular.module('selfboss', ['ionic', 'ngCookies', 'selfboss.controllers', 'selfboss.directives'])
 
 .run(function($ionicPlatform,$rootScope, auth) {
	 
    // $rootScope.$on('$routeChangeStart', function()
    //{
         auth.checkStatus();
   // })
 	 
  $ionicPlatform.ready(function() {
    
	if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    
	if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  
  
  });
  
  
})



.factory("auth", function( $cookies,$cookieStore,$location,$state)
{
    return{
		 
         checkStatus : function()
        {     
		     var rutasPrivadas = [
    			"/app/home",
				"/app/profissionais" 
  			 ];
 		   
		    if(this.in_array($location.path(),rutasPrivadas) && typeof($cookies.session_usuario) == "undefined")
            {
 			   $state.go('login');  
            }
            
             if($location.path() == "/login" && typeof($cookies.session_usuario) != "undefined")
            {
  			     $state.go('app.home');
            } 
        },
        in_array : function(needle, haystack)
        {
            var key = '';
            for(key in haystack)
            {
                if(haystack[key] == needle)
                {
                    return true;
                }
            }
            return false;
        }
    }
})

 
 
 
.config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
   
   
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
	 

 .state('app.dados', {
      url: "/dados",
      views: {
        'menuContent' :{
          templateUrl: "templates/dados.html",
          controller: 'dadosCtrl'
        }
      }
    })
	
	
.state('app.servicos', {
      url: "/servicos",
      views: {
        'menuContent' :{
          templateUrl: "templates/servicos.html",
          controller: 'servicosCtrl'
        }
      }
    })		
	
	
.state('app.buscar', {
      url: "/buscar",
      views: {
        'menuContent' :{
          templateUrl: "templates/buscar.html",
          controller: 'buscarCtrl'
        }
      }
    })	
	
	
.state('app.suporte', {
      url: "/suporte",
      views: {
        'menuContent' :{
          templateUrl: "templates/suporte.html",
          controller: 'suporteCtrl'
        }
      }
    })			
	
	
	
	
 .state('app.orcamentos', {
      url: "/orcamentos",
      views: {
        'menuContent' :{
          templateUrl: "templates/orcamentos.html",
          controller: 'orcamentosCtrl'
        }
      }
    })	
	
	 .state('app.depoimentos', {
      url: "/depoimentos",
      views: {
        'menuContent' :{
          templateUrl: "templates/depoimentos.html",
          controller: 'depoimentosCtrl'
        }
      }
    })	
	
	
	 .state('app.mensagens', {
      url: "/mensagens",
      views: {
        'menuContent' :{
          templateUrl: "templates/mensagens.html",
          controller: 'mensagensCtrl'
        }
      }
    })	
	
	
	 .state('app.pertodemim', {
      url: "/pertodemim",
      views: {
        'menuContent' :{
          templateUrl: "templates/pertodemim.html",
          controller: 'MapCtrl'
        }
      }
    })	
	
	 
	
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'homeCtrl'
        }
      }
    })


  .state('app.mapa', {
      url: "/mapa",
      views: {
        'menuContent' :{
          templateUrl: "templates/mapa.html",
          controller: 'MapCtrl'
        }
      }
    })

  .state('app.profissionais', {
      url: "/profissionais",
      views: {
        'menuContent' :{
          templateUrl: "templates/profissionais.html",
          controller: 'profissionaisCtrl'
        }
      }
    })   

    .state('app.profissional', {
      url: "/profissionais/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/profissional.html",
          controller: 'profissionalCtrl'
        }
      }
    }) 
  
   
  	.state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
    });



  $urlRouterProvider.otherwise('/login');
   
})  


  

 
 

