
# News Crews

The News Crews app is for consumers who enjoy good conversation while digesting their daily dose of news. 

Here at News Crews, we want to make news more social. How you might ask? Once you're a registered user (it's super simple) you can curate or join groups with similar interests to you. As a group admin, you can choose to invite users or go public, allowing users to join themselves without permission. Within your group, each user will receive five articles per day (derived from their favorite topics) and can select only one to discuss with the group. Thats it!

Have fun, start reading and never stop discussing!

## Using The App:

Newscrews requires all users to create an account using passport. Upon your first visit to the website, navigate to localhost:3000/newscrews and you will be redirected to an authorization page. You can either login (assuming you have already registerd) or click the register link below the UN & PW field. Once you are a registered user, you will be redirected to the main group page.

On the groups page, you can create, update, delete and navigate into groups that sound interesting to you by clicking on the groups name.

Withing the group, you can post a comment with a url to share and read news articles. The comment post is currently a WIP and is not functioning at this time.

Thats it!

If you wish to stick around and look through some of the early planning for this app, see the images and details below regarding db structure, user stories, wireframes, etc.

Thanks for visiting and feel free to help or provide feedback if you feel so inclined.

## Video Walkthrough Link: https://youtu.be/dz9csj4FOo8

## User Stories Idea 2 (social news app):
- As a user of ... I want to read news articles online
- As a user of ... I want to stay in-touch with friends through the discussion of current events
- As a user of ... I want exposure to news articles I wouldn't typically read via discussion group votes
- As a user of ... I want to save and share my favorite news articles with friends and for personal browing later
- As a user of ... I want to join random groups for article discussion

## ERD:
1. Table Users: id(spk), Username, Password, F_Name, L_Name, Email, Created_At
2. Table Groups: id(spk), Description, Created_At, Creator (REF Users.id)
3. Table Comments: id(spk), Author(REF Users.id), Content, Created_At, Group_id(REF Groups.id)
4. Table Articles: id(spk), URL, Source, Created_At
### M:M 
5. Table User_Groups: id(spk), User_id(REF Users.id), Group_id(REF Groups.id)
6. Table Group_Articles: id(spk), Group_id(REF Groups.id), Article_id(REF Articles.id)

![img_20180801_134100](https://media.git.generalassemb.ly/user/14895/files/2a94cb4e-9593-11e8-85e7-57aa0be8387e)

## Wireframe:

This is a very rough sketch but I will be using Bulma to style this project. More views will come into play as the project concept matures:

![img_20180801_134624](https://media.git.generalassemb.ly/user/14895/files/5d13bdd2-9593-11e8-9599-a0d3344ec694)

## Flowchart:

![screen shot 2018-08-03 at 9 57 04 am](https://user-images.githubusercontent.com/34017019/43646710-a266a806-9703-11e8-8f31-35e723162023.png)

## Project Resources & Shoutouts:

### People:
1. @John Master - Thank you for all the awesome authorization functions.
2. @Jason Seminara - Thank you for all the help with route discussion and controller functions as well as Quote-sta-gram which was heavily referenced in the making of this app.
3. @Drake Talley - Thank you for the fetch functions, I really wish I was able to implement them here.
4. @Jon Zachary AKA JayZ - Thank you for algorithm practice during unit 2, especially the express algo app we created while at convene. 

### npm packages:
1. bcryptjs v: 2.4.3
2. body-parser v: 1.18.3
3. bulma v: 0.7.1
4. connect-flash v: 0.1.1
5. dotenv v: 6.0.0
6. ejs v: 2.6.1
7. express v: 4.16.3
8. express-session v: 1.15.6
9. method-override v: 3.0.0
10. morgan v: 1.9.0
11. node-fetch v: 2.2.0
12. passport v: 0.4.0
13. passport-local v: 1.0.0
14. pg-promise v: 8.4.5
15. eslint v: 4.19.1 AIRBNB STYLEGUIDE
16. nodemon v: 1.18.3



