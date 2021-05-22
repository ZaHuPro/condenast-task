# Condé Nast programming task

JavaScript application that shows the latest news from the United Kingdom

## Server Setup   
In terminal:   
```js 
$ cd server

$ npm i

$ cp example.env .env

$ nano .env 
// replace the XXXXXXXXXX with valid newsapi.org API key and save it

$ npm run start

// Server is running at 5000 port (can see in the log)
```

## API Details   

 * Method: `GET`
 * URL: `_HOST_NAME_/api/articles`
 * Query String Parameter
    * query: `Keywords or phrases to search.`
    * page: `Indicates the current page number. (default: 1)`
    * pageSize: `The number of results to return per page. (default: 12)`


> Example: http://localhost:5000/api/articles?query=Martin&page=1&pageSize=12
