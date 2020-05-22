var app = angular.module('consoleStore', []);
app.controller('consoleController', function($scope){

	$scope.consoles = [
	{
		"name": "PS4",
		"description": "The PlayStation 4 (abbreviated as PS4) is a home video game console developed by Sony Computer Entertainment.",
		"release": "November 15, 2013",
		"price": 299.99,
		"images": [
			"images/ps4.jpg"
		],
		"console":[
			"images/ps4console.png"
		],
		"reviews": [{
			"body": "This is a great console!",
			"author": "jonathan.a.mcdonagh@gmail.com"
		}]
	},	
	{
		"name": "Nintendo Switch",
		"description": "The Nintendo Switch is a hybrid video game console, with the main system comprising the 'Switch Console', 'Switch Dock' and the 'Joy-Con' controllers. Although it is a hybrid console, Fils-Aimé stated that the Switch is 'a home console that you can take with you on the go'.",
		"release": "March 1, 2017",
		"price": 329.99,
		"images": [
			"images/ns.png"
		],
			"console":[
			"images/nsconsole.jpg"
		],
		"reviews": [{
						"body": "This is a great console!",
			"author": "jonathan.a.mcdonagh@gmail.com"
		}]
	},	
	{
		"name": "Xbox One",
		"description": "The Xbox One is a home video game console developed by Microsoft.",
		"release": "November 22, 2013",
		"price": 399.99,
		"images": [
			"images/xbox.gif"
		],
			"console":[
			"images/xboxconsole.jpg"
		],
		"reviews": [{
			"body": "This is a great console!",
			"author": "jonathan.a.mcdonagh@gmail.com"
		}]
	}];

	$scope.addReview = function(stone){
		this.console.reviews.push(stone);
		this.rev = {};
	}
});

	app.controller('TabController', function($scope){
		$scope.tab = 1;

		$scope.setTab = function(newValue){
			$scope.tab = newValue;
		};

		$scope.isSet = function(tabNumber){
			return $scope.tab === tabNumber;
		};
});