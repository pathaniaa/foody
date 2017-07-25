/*// Runs when HTML file is loaded
$(document).ready(function() {
    $('#user-email').on('keypress',function() {
        console.log($('#user-email').val())
    });
});*/
//var foodieApp = angular.module('foodieApp',[]);//initilize the app in js file

//initilize the app with routing in it
var foodieApp = angular.module('foodieApp',['ngRoute']);

$('#user-email').on('keypress',function() {//////// Email firld will show the text above subimt butoon , what ever we write in email field
        var email = $('#user-email').val()
        var message = 'Welcome Back, ' + email;
        $('.welcome-message').text(message);
    });
	
//routing for pages/login	
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	
	/*.when('/menubar',{
		templateUrl: 'pages/menubar.html',
		controller: 'menubar'
	})
	
	.when('/searchbar',{
		templateUrl: 'pages/searchbar.html',
		controller: 'searchbar'
	})
	
	.when('/header',{
		templateUrl: 'pages/header.html',
		controller: 'header'
	})*/
})	
///////////////Controllers///////////////////////////	
//Login controller
foodieApp.controller('loginController',function($scope,$location) {
$scope.goToHome = function() {
		console.log('Do Something')
		$location.url('home')
	}


})



foodieApp.controller('serchbar',function($scope) {

})

foodieApp.controller('menubar',function($scope) {

})

foodieApp.controller('maincontroller',function($scope) {

})

foodieApp.controller('restaurantController',function($scope,$routeParams) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = 'Paste your restaurant Object here'
	$scope.restaurant = restaurants[$routeParams.id - 1];
	
	
	
	/*$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Panjabi Dhaba',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25eYMZY5HRXISCbahlyN-AgDQvoOfOcDWRmG2mf0Vb4P62DQYrg'
},
{
	name: 'Dominoz',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1g4C7GB-TLAKT7RV09wEutaj4Nccth--AsMKMjqeF2WBZr_w'
}]*/
})

/*foodieApp.controller('restaurantController',function($scope) {
	//Empty
})*/

///////////////////////////Controllers Ends////////////////////
//for first block of post field(main field)	
foodieApp.controller('mainController',function($scope) {
	//$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
	
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Panjabi Dhaba',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25eYMZY5HRXISCbahlyN-AgDQvoOfOcDWRmG2mf0Vb4P62DQYrg'
},
{
	name: 'Dominoz',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1g4C7GB-TLAKT7RV09wEutaj4Nccth--AsMKMjqeF2WBZr_w'
}]
})