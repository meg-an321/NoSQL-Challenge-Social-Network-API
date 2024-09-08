# Social-Network-API


## Description 
This application is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.
​This backend can be used for social media startups, and uses a NOSQL database, Express.js for routing, MongoDB database, and Mongoose ODM 
to handle large amounts of unstructured data, including User and Thought models and schemas and 
Reaction subdocument schema. When the application is invoked, the server is started and 
Mongoose models are synced to the MongoDB database.

API GET routes in Insomnia Core for users and thoughts show data and is displayed in a 
formatted JSON. API POST, PUT, and DELETE routes in Insomnia Core successfully create, update, and delete users and thoughts in the database. 
API POST and DELETE routes in Insomnia Core successfully 
create and delete reactions to thoughts and add and remove friends to a user’s friend list.​

## Table of Contents
- [Installation](#installation)
- [Packages](#packages)
- [Links](#links)
- [User Story](#userstory)
- [Acceptance Criteria](#acceptancecriteria)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation 
`npm install`
`npm run seed`
`npm start`

## Packages
- Express.js
- Mongoose ODM

## Links
Video Demo: https://drive.google.com/file/d/195asdXvajk3QtayO1BEYbxtLjTZMlnqY/view?usp=sharing&t=14

GitHub: https://github.com/meg-an321/NoSQL-Challenge-Social-Network-API

