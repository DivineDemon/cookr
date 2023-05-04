# cookr
### A Recipe Sharing App

**Discover a New and Perhaps a Friendlier Way of Cooking with Great Homecooks and Chefs from Around the World.**

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
1. Vue 3 with Store and Router
2. Tailwind
3. Custom Responsive Components using Tailwind
4. Custom Icons Components with SVGs
5. A Service for Google OAuth **(TBD)**

### Server
1. Node.js
2. Express.js
3. MySQL
4. XAMPP
5. JWT Auth

## Database Schema
### User Table
| Attribute | Type |  Attrib  |
| --------- | ---- | -------- |
| id (PK)   | int  | NOT_NULL |
| name      | text | NOT_NULL |
| email     | text | NOT_NULL |
| password  | text | NOT_NULL |
| phone     | text |          |
| age       | int  |          |
| location  | text |          |
| image     | text |          |

### Recipes Table
| Attribute    | Type |  Attrib  |
| ------------ | ---- | -------- |
| id (PK)      | int  | NOT_NULL |
| user_id (FK) | int  | NOT_NULL |
| likes        | int  |          |
| name         | text | NOT_NULL |
| description  | text |          |
| ingredients  | text |          |
| downloads    | int  |          |
| created_at   | time |          |
| updated_at   | time |          |

### Comments Table
| Attribute      | Type |  Attrib  |
| -------------- | ---- | -------- |
| id (PK)        | int  | NOT_NULL |
| user_id (FK)   | int  | NOT_NULL |
| reply_id (FK)  | int  | NOT_NULL |
| recipe_id (FK) | int  | NOT_NULL |
| content        | text |          |
| likes          | int  |          |

## Task List
- [x] Project Setup
  - [x] Client
  - [x] Server
- [x] DB Design
 - [x] Test on Postman
- [ ] Connect Client to Server
- [ ] UI Design (**Subject to Change**)
  - [ ] WireFraming
  - [ ] Navbar
  - [ ] Landing Page
  - [ ] Login Page/Component (**No Modals**)
  - [ ] User Profile Page
  - [ ] Search Results Page
  - [ ] Home Page
  - [ ] Add Recipe Page
  - [ ] Recipe Dashboard
  - [ ] Edit Recipe Page
  - [ ] Recipe Expanded Page

**To Run the Project in Development Mode**
Execute the Following Commands:
- in the client directory:
```
npm i
npm run serve
```

- in the server directory:
```
npm i
npm run dev
```

## Issues
- Handle Empty Returning Data
