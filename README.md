# Social-Network-API

## Overview

The Social Network API is a backend application that provides an API for a social network where users can share their thoughts, react to friends' thoughts, and create a list of friends. This project demonstrates the use of MongoDB, Express.js, and Mongoose ODM to handle CRUD operations for users, thoughts, and reactions.

## Description

This project focuses on building the API for a social network platform. The app allows users to:

Create, update, and delete users.
Post thoughts and reactions.
Add or remove friends.
Store user information in a MongoDB database.

## Walkthough:



## Installation

Before you begin, make sure you have the following installed on your local machine:

- Node.js
- MongoDB
- npm

### Installation Steps

1. Clone the repository

Start by cloning the repository to your local machine using the following command:

git clone https://github.com/PedroChipana/social-network-api.git

2. Navigate to the project directory

Move into the directory of the project:

cd your-project-repo

3. Install dependencies

npm install

4. Run the Application

npm run start

5. Test the API

Navigate to http://localhost:3001/api in Insomnia.

Available routes include: /api/thoughts and /api/users

6. Optional: Run in Development Mode

npm run start:dev

## Usage

Base URL
All endpoints are based on the following base URL: http://localhost:3001/api

Make sure the server is running locally, or replace the URL with your deployed server's URL if applicable.

The API supports CRUD (Create, Read, Update, Delete) operations for users, thoughts (posts), and reactions. Here are examples of how to interact with these resources.

Users
1. Create a New User
Endpoint: POST /users
Description: Create a new user by providing a username and email.
Example:
POST /api/users
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com"
}
2. Get All Users
Endpoint: GET /users
Description: Retrieve a list of all users.
Example:
GET /api/users
3. Get a Single User by ID
Endpoint: GET /users/:userId
Description: Retrieve a single user by their ID.
Example:
GET /api/users/60b77f4f5b4c7b4a5429e1a1

4. Update a User
Endpoint: PUT /users/:userId
Description: Update a user's username or email by their ID.
Example:
PUT /api/users/60b77f4f5b4c7b4a5429e1a1
Content-Type: application/json

{
  "username": "john",
  "email": "john_updated@example.com"
}

5. Delete a User
Endpoint: DELETE /users/:userId
Description: Delete a user by their ID.

Example:
DELETE /api/users/60b77f4f5b4c7b4a5429e1a1

### Thoughts
The CRUD actions on thoughts may be used similarly to Users routes using the following path:

http://localhost:3001/api/thoughts

### Reactions

1. Add a Friend to a User
Endpoint: POST /thoughts/:thoughtId/reactions
Description: Add a reaction to an existing thought by providing reactionBody and username.
Example:
POST /api/thoughts/60b784f75b4c7b4a5429e1a5/reactions
Content-Type: application/json

{
  "reactionBody": "Great thought!",
  "username": "jane_smith"
}
2. Remove a Reaction from a Thought
Endpoint: DELETE /thoughts/:thoughtId/reactions/:reactionId
Description: Delete a reaction from a thought by specifying the thoughtId and reactionId.
Example:
DELETE /api/thoughts/60b784f75b4c7b4a5429e1a5/reactions/60b784f95b4c7b4a5429e1a6

### Friends

1. Add a Friend to a User
Endpoint: POST /users/:userId/friends/:friendId
Description: Add a user as a friend by specifying the userId and friendId.
Example:
POST /api/users/60b77f4f5b4c7b4a5429e1a1/friends/60b77f4f5b4c7b4a5429e1a2
2. Remove a Friend from a User
Endpoint: DELETE /users/:userId/friends/:friendId
Description: Remove a user from a user's friends list.
Example:
DELETE /api/users/60b77f4f5b4c7b4a5429e1a1/friends/60b77f4f5b4c7b4a5429e1a2


## License

This project is licensed under the MIT license.

## Technologies Used

Express.js - A web application framework for Node.js Express.js on GitHub
MongoDB - NoSQL database used for storing unstructured data MongoDB
Mongoose - An Object Data Modeling (ODM) library for MongoDB and Node.js Mongoose on GitHub
Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine Node.js

## Testing

You can use Insomnia, Postman, or similar tools to test the API by sending requests to the endpoints mentioned above. Ensure that the server is running on http://localhost:3001

## Future Improvements

- Authentication: Add user authentication (e.g., with JWT) to secure certain routes.
- Pagination: Implement pagination for large data sets such as thoughts and users.
- Frontend: Integrate this API with a React front-end for a complete user interface.

## Conclusion

This project serves as a backend API for a potential social networking platform, demonstrating the use of NoSQL databases, data modeling with Mongoose, and RESTful APIs. Further enhancements could include security features and a front-end user interface.

## Questions
Please visit my GitHub profile: https://github.com/PedroChipana.
For additional questions, please contact me at: pedro.chipana94@gmail.com.