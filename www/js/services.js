var url=

angular.module('starter.services', [])

.service('Exchange_rates', function($http) {
 return {
   getExchangeRates: function() {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.jsonp('http://localhost:9000/?callback=JSON_CALLBACK')
       .then(function (response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Get exchange rate list', response.data);
		 console.log(response.data["USD - US Dollar"]["EUR - Euro_rate"]);
		  localStorage.currency_list = JSON.stringify(response.data);
         return response.data;
       });
   },
   
   getCurrenciesList: function()
   {
	  return ["USD - US Dollar", "EUR - Euro", "GBP - British Pound", "JPY - Yen", "INR - Indian Rupee", "CNY - Chinese Yuan",  "ARS - Argentine Peso", "COP - Colombian Peso", "CLP - Chilean Peso", "MXN - Mexican Peso", "BRL - Brazilian Real", "RUB - Russian Ruble"].sort();
   }
 
 };
});
