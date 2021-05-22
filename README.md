# Condé Nast programming task

JavaScript application that shows the latest news from the United Kingdom
## Clone 

In terminal:   
```js   
$ git clone <repository clone url>
$ cd condenast-task
```

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

## Client Setup   
In new terminal:   
```js 
$ cd client

$ npm i

$ npm run build

$ npm run serve

// Client is running at 3000 port
// Open http://localhost:3000 in browser
```