'use strict';
let env = process.env.NODE_ENV || 'development';


if (env ===  'development') {
  process.env.PORT = 3000;
  process.env.API_PORT = 3001;
  process.env.MONGODB_URI  = 'mongodb://cruxbreaker:ashushaan318@ds117111.mlab.com:17111/universal-react-bookstore';
}
else if (env === 'test'){
  process.env.PORT = 3000;
  process.env.API_PORT = 3001;    
  process.env.MONGODB_URI  = 'mongodb://cruxbreaker:ashushaan318@ds117111.mlab.com:17111/universal-react-bookstore';
}


console.log('****Working Environment is : ', env);
//console.log('****MONGO Environment is : ', process.env.MONGODB_URI);