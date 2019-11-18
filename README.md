# Backend-Page
## Endpoint Documentation

Base URL: tech-stuff-api.herokuapp.com

| Operator | Endpoint | Expected Body Data | Returns | Requires Header Token (Auth) |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|  POST  |  /api/register  |  {username: "username" (unique, required), password: "password" (required), phone_number: "530-212-1800" (not required), location: "Somewhere" (not required)}  |  new user ID  |  No  |
|  POST  |  /api/login  |  {username: "username" (required), password: "password" (required)}  |  {message, token}  |  No  |