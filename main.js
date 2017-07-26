/*// Runs when HTML file is loaded
$(document).ready(function() {
    $('#user-email').on('keypress',function() {
        console.log($('#user-email').val())
    });
});*/
//var foodieApp = angular.module('foodieApp',[]);//initilize the app in js file
//initilize the app with routing in it

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
	
})

	
///////////////Controllers///////////////////////////	
//Login controller
foodieApp.controller('loginController',function($scope,$location,) {
$scope.goToHome = function() {
		console.log('Do Something')
		$location.url('home')
	}


})





////////////////////////////////////////////Restaurant Controller///////////////////////////////////////////////
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	$scope.ingredients = [];
	var restaurants = [{
	id:1,	
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
	//image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	id:2,
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
	id:3,
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

$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
// Do something
var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
				'Authorization': 'Key f5534695ec9d4ed6a0a90a974e637dfd',
				'Content-Type': 'application/json'
		},


// 		success: function (response) {
// 				var ingredients = response.outputs[0].data.concepts;
// 				var list = '';
// 				for (var i =0;i < ingredients.length;i++) {
// 						list += '<div class="ingredient">' + ingredients[i].name + '</div>'
// 				}
// 				$('.ingredients').html(list);
// 		},
// error: function (xhr) {
// 				console.log(xhr);
// 		}
// })
'data': data
}).then(function (response) {
	var ingredients = response.data.outputs[0].data.concepts;
	for (var i =0;i < ingredients.length;i++) {
	$scope.ingredients.push(ingredients[i].name);
	}
		}, function (xhr) {
				console.log(xhr);
			

  
})

}
	})





/*foodieApp.controller('restaurantController',function($scope) {
	//Empty
})*/

///////////////////////////Controllers Ends////////////////////
//for first block of post field(main field)	


/////////////////////////////////////////////////////////////Main Controller////////////////////////////////
foodieApp.controller('mainController',function($scope) {
		
	$scope.restaurants = [{
	id:1,	
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
	id:2,
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
	id:3,
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
