/*// Runs when HTML file is loaded
$(document).ready(function() {
    $('#user-email').on('keypress',function() {
        console.log($('#user-email').val())
    });
});*/


$('#user-email').on('keypress',function() {
        var email = $('#user-email').val()
        var message = 'Welcome Back, ' + email;
        $('.welcome-message').text(message);
    });
	
foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
})