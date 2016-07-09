## TooloCarRental
Angular2 app for consuming the [Hotwire Rental Car Shopping API](http://developer.hotwire.com/docs/Rental_Car_Shopping_API).

## Frameworks
These are the elections I made for the demo:
- Angular2. I'm experienced with Angular 1.x and I'm getting started with Angular 2, so I thought it would be challenging to implement the demo using a bleeding edge framework.
- Bootstrap Material. Even if it is a simple demo, I think applying well-known design patterns to it is a non-expensive way of improving its quality. 

## Boilerplate
- [angular2 webpack introduction](https://angular.io/docs/ts/latest/guide/webpack.html) base project which uses Webpack for development and building.

## Development process and thoughts
- Sign up for Hotwire API and explore its methods
- Draw a wireframe for the expected result
- Implement SearchService
- Create a SearchComponent which shows search controls and calls the SearchService
- Create a CarListComponent to show search results
- Include UI libraries for a better look
- Add some basic custom styles

## Development
- Run live server with: npm start
- Run tests with: npm test
- Build with: npm run build
- Deploy on github pages
- Fix error with CORS by updating to JSONP
- Deploy to Heroku due to errors with non-secure requests from HTTPs to HTTP