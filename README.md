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
3. MySQL (XAMPP)
4. JWT Auth
5. bcryptjs
6. Prisma ORM

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
| Attribute    | Type |  Attrib  | Default |
| ------------ | ---- | -------- | ------- |
| id (PK)      | int  | NOT_NULL |         |
| user_id (FK) | int  | NOT_NULL |         |
| likes        | int  |          | 0       |
| name         | text | NOT_NULL |         |
| description  | text |          |         |
| ingredients  | text |          |         |
| downloads    | int  |          | 0       |
| created_at   | time |          |         |
| updated_at   | time |          |         |

### Comments Table
| Attribute      | Type |  Attrib  | Default |
| -------------- | ---- | -------- | ------- |
| id (PK)        | int  | NOT_NULL |         |
| user_id (FK)   | int  | NOT_NULL |         |
| content        | text |          |         |
| likes          | int  |          | 0       |

### Comment Replies Table
| Attribute       | Type |  Attrib  |
| --------------- | ---- | -------- |
| id (PK)         | int  | NOT_NULL |
| comment_id (FK) | int  | NOT_NULL |
| reply_id        | int  | NOT_NULL |

### User Followers Table
| Attribute        | Type |  Attrib  |
| ---------------- | ---- | -------- |
| id (PK)          | int  | NOT_NULL |
| user_id (FK)     | int  | NOT_NULL |
| follower_id      | int  | NOT_NULL |

### User Following Table
| Attribute         | Type |  Attrib  |
| ----------------- | ---- | -------- |
| id (PK)           | int  | NOT_NULL |
| user_id (FK)      | int  | NOT_NULL |
| following_id      | int  | NOT_NULL |

### Recipe Comment Table
| Attribute         | Type |  Attrib  |
| ----------------- | ---- | -------- |
| id (PK)           | int  | NOT_NULL |
| recipe_id (FK)    | int  | NOT_NULL |
| comment_id (FK)   | int  | NOT_NULL |

## Database ERD
![ERD Diagram for Cookr Database](https://svgshare.com/i/snd.svg)

## API Endpoints
  - Auth:
    1. Register User
      - Route: ("/api/auth/register")
    2. Login User
      - Route: ("/api/auth/login")
  - User:
    1. Follow User
        - Route: ("/api/user/follow")
        - Protected Route
        - Requires ID of the Followed User from `req.query`
    2. Unfollow User
      - Route: ("/api/user/unfollow")
      - Protected Route
      - Requires ID of the Followed User from `req.query`
  - Recipe:
    1. Get All Recipes ("/api/recipe")
    2. Get User Recipes
      - Route: ("/api/recipe/user")
      - Protected Route
    3. Add Recipe
      - Route: ("/api/recipe")
      - Protected Route
    4. Get Recipe
      - Route: ("/api/recipe/recipe")
      - Requires ID of Recipe Required from `req.query`
    5. Delete Recipe
      - Route: ("/api/recipe/recipe")
      - Requires ID of Recipe Required from `req.query`
    6. Update Recipe
      - Route: ("/api/recipe/recipe")
      - Requires ID of Recipe Required from `req.query`
    7. Like Recipe
      - Route: ("/api/recipe/like")
      - Requires ID of Recipe Required from `req.query`
    8. Download Recipe
      - Route: ("/api/recipe/download")
      - Requires ID of Recipe Required from `req.query`
  - Comment:
    1. Get User Comments
      - Route: ("/api/comment/user-comments")
      - Requires ID of User whose Comments are to be Fetched from `req.query`
    2. Get Recipe Comments
      - Route: ("/api/comment/recipe-comments")
      - Requires ID of Recipe whose Comments are to be Fetched from `req.query`
    3. Get Comment
      - Route: ("/api/comment/")
    4. Add Comment
      - Protected Route
      - Requires ID of the Recipe the Comment is associated to from `req.query`
    5. Delete Comment
      - Route: ("/api/comment")
      - Requires ID of the Comment from `req.query`
    6. Update Comment
      - Route: ("/api/comment")
      - Requires ID of the Comment from `req.query`
    7. Like Comment
      - Route: ("/api/comment/like")
      - Requires ID of Comment Required from `req.query`
    - Reply:
    1. Get Comment Replies
      - Route: ("/api/reply/comment-replies")
      - Requires ID of Comment whose Replies are to be Fetched from `req.query`
    2. Get Reply
      - Route: ("/api/reply")
    3. Add Reply
      - Protected Route
      - Requires ID of the Comment the Reply is associated to from `req.query`
    4. Delete Reply
      - Route: ("/api/reply")
      - Requires ID of the Reply from `req.query`
    5. Update Reply
      - Route: ("/api/reply")
      - Requires ID of the Reply from `req.query`
    6. Like Reply
      - Route: ("/api/reply/like")
      - Requires ID of Reply Required from `req.query`

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
