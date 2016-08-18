angular.module('starter.controllers', [])

.controller('CalculatorCtrl', function($scope, Exchange_rates) { 
  $scope.result = 0;
  $scope.conversion={};
  $scope.currencies = Exchange_rates.getCurrenciesList();
   $scope.date = localStorage.date;
     Exchange_rates.getExchangeRates()
   .then(function(response) {
	 $scope.exchange_rates = response;
	 console.log("The app downloaded the latest currencies rates list from the server!");
	 localStorage.date = new Date();
	 $scope.date = localStorage.date;
   })
   .catch(function(response) {
  console.error("Couldn't access the server. Using last locally stored currencies list", response.status, response.data);
  $scope.exchange_rates = JSON.parse(localStorage.currency_list);
});
   
  $scope.calc_conversion = function() { 
  console.log($scope.exchange_rates);
  console.log($scope.conversion.selCurrency);
  $scope.selection_exchange_rate = $scope.exchange_rates[$scope.conversion.selCurrency][$scope.conversion.selExchangeCurrency+"_rate"];
  $scope.result = ($scope.conversion.quantity * $scope.selection_exchange_rate).toFixed(4) + " " + $scope.conversion.selExchangeCurrency.substring(0,3);
  
	};
})

.controller('CurrencyCtrl', function($scope, $stateParams, Exchange_rates) { 
$scope.date = localStorage.date;
   $scope.currencies = Exchange_rates.getCurrenciesList();
    console.log($scope.currencies);
})

.controller('CurrencyDetailCtrl', function($scope, $stateParams, Exchange_rates) { 
 Exchange_rates.getExchangeRates()
   .then(function(response) {
	 $scope.exchange_rates = response;
	 $scope.rates = $scope.exchange_rates[$stateParams.currencyId];
	 console.log($scope.exchange_rates);
	  console.log($scope.rates);
   })
   .catch(function(response) {
  console.error("Couldn't access the server. Using last locally stored currencies list", response.status, response.data);
  $scope.exchange_rates = JSON.parse(localStorage.currency_list);
  $scope.rates = $scope.exchange_rates[$stateParams.currencyId];
});
   console.log($stateParams);
   $scope.currency = $stateParams.currencyId;
   console.log($scope.currency);
 
});
