# Backend-Page
## Endpoint Documentation



Base URL: tech-stuff-api.herokuapp.com

| Operator | Endpoint | Purpose | Expected Body Data | Returns | Requires Header Token (Auth) |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
|  POST  |  /api/register  |  Registration  |  {username: "username" (unique, required), password: "password" (required), email: "email@email.com" (required), phone_number: "530-212-1800" (not required), location: "Somewhere" (not required)}  |  new user ID  |  No  |
|  POST  |  /api/login  |  Logging in  |  {username: "username" (required), password: "password" (required)}  |  {message, token, user_id}  |  No  |
|  GET  |  /api/rentals  |  Getting array of all rentals from all users  |  None  |  Array of all rentals.  |  Yes  |
|  GET  |  /api/rentals/:id  |  Getting a rental with specified ID  |  None  |  Rental with specified ID.  |  Yes  |
|  GET  |  /api/users  |  Getting array of all users  |  None  |  Array of all user accounts.  |  Yes  |
|  GET  |  /api/users/:id  |  Getting user with specified ID  |  None  |  Object containing user with specified ID  |  Yes  |
|  GET  |  /api/users/:userId/rentals  |  Getting rentals that are owned by user with specified ID  |  None  |  Array of all rentals owned by account with specified ID.  |  Yes  |
|  POST  |  /api/rentals/create  |  Creating a new rental  |  { user_id: 1 (required), item_name: "name" (required), item_description: "description" (not required), category: "category" (not required), rate: 20.5 (not required) }, "img_url" (not required)  |  Object containing newly created rental.  |  Yes  |
|  POST  |  /api/rentals/:id/rent  |  Setting rental with specified ID as rented  |  { id : 1 (required), rented_at: "date" (required), due_back: "date" (required), renter_id: 2 (required) }  |  Object containing newly rented rental ID.  |  Yes  |
|  POST  |  /api/rentals/:id/return  |  Setting rental with specified ID as not rented  |  None  |  Object containing newly un-rented rental ID.  |  Yes  |
|  PUT  |  /api/rentals/:id  |  Updating a rental with specified ID  |   user_id: 1 (not required), item_name: "name" (not required), item_description: "description" (not required), category: "category" (not required), rate: 20.5 (not required),"img_url" (not required) }  |  Object containing updated rental.  |  Yes  |
|  PUT  |  /api/users/:id  |  Updating user account with specified ID  |  {username: "username" (not required), email: "email@email.com" (not required), phone_number: "530-212-1800" (not required), location: "Somewhere" (not required)}  |  Object containing updated user.  |  Yes  |
|  DELETE  |  /api/rentals/:id  |  Deleting rental with specified ID  |  None  |  Object containing updated array of rentals.  |  Yes  |