# cookr
### A Recipe Sharing App

**Discover a New and Perhaps a more Friendly Way of Cooking with Great Homecooks and Chefs from Around the World.**

Cookr is a web app aimed at helping homecooks and chefs from around the world share their recipes and gain traction
on it as well. It's almost like a social media application but for cooking and food enthusiasts. You can save recipes
you like, follow your favourite cooks, show how you feel by liking and commenting too. Even help guide people by replying
to their comments.

## User Roles
1. Creator
  > This user will create and post new recipes on the platform.
2. Viewer
  > This user will visit the application and view the recipes. This user will be of two types;
  - Authenticated: A user with a complete profile on the platform
  - Unauthenticated: A user on the platform just to visit, maybe scroll around
3. Admin
  > The superuser of the application.

## Stack
### Client
1. Vue 3
  - Store
  - Router
2. Tailwind
3. Daisy UI
4. Font Awesome
5. A Service for Google OAuth **(TBD)**

### Server
1. Node.js
2. Express.js
3. MySQL
4. XAMPP
5. JWT Auth

## Database Schema
### User Table
| Attribute | Type |
| --------- | ---- |
| id (PK)   | int  |
| name      | text |
| email     | text |
| password  | text |
| phone     | text |
| age       | int  |
| location  | text |
| image     | text |
|------------------|

### Recipes Table
| Attribute    | Type |
| ------------------- |
| id (PK)      | int  |
| user_id (FK) | text |
| likes        | int  |
| name         | text |
| description  | text |
| ingredients  | text |
| downloads    | int  |
| created_at   | time |
| disabled_at  | time |
| updated_at   | time |
|---------------------|

### Comments Table
| Attribute      | Type |
| --------------------- |
| id (PK)        | int  |
| user_id (FK)   | text |
| comment        | text |
| recipe_id (FK) | text |
| likes          | int  |
|-----------------------|

### Comment Replies Table
| Attribute       | Type |
| ---------------------- |
| id (PK)         | int  |
| comment_id (FK) | text |
| reply           | text |
|------------------------|