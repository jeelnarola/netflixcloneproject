# Netflix Clone 
## Running the Server
##### Start the server on PORT 9090. Ensure strict adherence to this port number.

## Project Overview

##### You are tasked with building an API for a Event Management. The project should include the following features.
- Register And Login JWT use and cooike set.
- CURD Operation performance.
- Movie Data Get And Serch.
- TV Data Get And Serch.
- Movie And TV API Use Online.

## Follow these instructions strictly.

### Implement in MVC Structure.

#### Database Connection.
1. Create a 'configs' folder. Inside this folder, create a file named 'db.js'. Write logic to connect to MongoDB using an online database such as MongoDB Atlas.

### Database Schema Design.
2. Create a 'models' folder
    - create a file named 'user.model.js' with the following schema.
```
username,
email,
password,
image:{
    type:String,
    default:""
},
searchHistory :{
    type:Array,
    default:[]
}
```

## Sign Up and Login

### Sign Up - POST route
- Endpoint: Create a POST route at ``` /api/v1/auth/signup```.
- After a successful Sign, set cookies in the browser with the user's Token.
- Within the form, provide the following input fields with corresponding IDs:
    - username
    - password
    - email
    - role

### Login - POST route
- Create a POST route named ```/api/v1/auth/login```.
- Within the form, provide the following input fields with corresponding IDs:
    - email
    - password
- After a successful login, set cookies in the browser with the user's Token.

### Logout - POST route
- Create a POST route named ```/api/v1/auth/logout```.
- Remove Cookie.


## Netflix Clone.

## Movie Route.

### GET route :- All Movie Show.
1. Create a GET route at ```/api/v1/movie/trending```.

### GET route :- All Movie trailers Show.
1. Create a GET route at ```/api/v1/movie/:id/trailers```.

### GET route :- All Movie Detalis Show.
1. Create a GET route at ```/api/v1/movie/:id/detalis```.

### GET route :- All Movie similar Show.
1. Create a GET route at ```/api/v1/movie/:id/similar```.

### GET route :- All Movie category Show.
1. Create a GET route at ```/api/v1/movie/:category```.

## Search Route.

### GET route :- person Search.
1. Create a GET route at ```/api/v1/search/person/:query```.

### GET route :- movie Search.
1. Create a GET route at ```/api/v1/search/movie/:query```.

### GET route :- tv Search.
1. Create a GET route at ```/api/v1/search/tv/:query```.

### GET route :- history Search.
1. Create a GET route at ```/api/v1/search/history```.

### GET route :- history Search.
1. Create a GET route at ```/api/v1/search/history/:id```.

## TV Route.

### GET route :- trending TV Show.
1. Create a GET route at ```/api/v1/tv/trending```.

### GET route :- TV trailers With Id.
1. Create a GET route at ```/api/v1/tv/:id/trailers```.

### GET route :- tv detalis With Id.
1. Create a GET route at ```/api/v1/tv/:id/detalis```.

### GET route :- tv similar With Id.
1. Create a GET route at ```/api/v1/tv/:id/similar```.

### GET route :- tv category With categoryId.
1. Create a GET route at ```/api/v1/tv/:category```.

