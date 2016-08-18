# X-rates scraper server

A simple x-rates.com currency exchange rates web scraper server made on node.js as part of a simple app project (see Currency Calculator project for more insight).

## What does it do?

It search for the most recent rates for a given set of currencies and save them in a json file (currencies.json) which is displayed through a jsonp display as 
the index of the server.

The server updates the rates itself each hour through cron library.

## Running the server

Before all, make sure you have [Node.js](http://nodejs.org/) installed.

Then just enter the following commands in your console

```sh
$ git clone git@github.com:mauriciojorta/X-rates-scraper-server.git 
$ cd X-rates-scraper-server
$ npm install
$ npm start # Or node index
```

The server should be running on [localhost:9000](http://localhost:9000/).



