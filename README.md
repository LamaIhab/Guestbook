# Guestbook

# Description :
this website is used to post messages and reply to messages where a user can sign up/ log in and interact with others and post their own messages as well as edit and delete their own messages. A user can only post/reply/edit/delete messages if only they are signed up or signed in but they can view other messages without signing up/ signing in.

# implementation:
#BackEnd
models folder : it consists of user,message,reply models as these are the models we have in the website with their corresponding attributes(features) to be stored in mongodb database.

config folder: contains url needed to connect to mongo atlas database and store our data there.

api/controllers : it contains functions(user stories) of the website that a user can perform.
api/routes : it contains the exact route to each functionality using the express router and REST APIs.

Validations : it contains the signing up requirements using Joi library for ex: the length of password, type of username etc. to alert the user when he doesn't meet those requirementes.

#FrondEnd
client folder:
front end was implemented using react
App.js file: contains the whole app and what would be rendered to the user and the routes to use using react-router-dom
then we have all the components that makes up the website(sign in form,sign up form, header for navigation,messages to render messages, replyrow to render replies)
I've used axios library to call the backend and access the data from database and perform functionality.


#How to use:
run commands for backend : npm install in guestbook folder to install all dependencies in package.json file (do not cd to any folder as backend files are all outside) then run : npm start to start backend

run commands for frontend : npm install in client folder to install dependencies in package.json file (cd to client folder as all frontend files are inside) then run : npm start in client folder as well to start frontend


you will see the homepage and a link saying explore which will take you to messages page but you cannot reply or post messages unless you sign in or sign up to click on sign up from header and sign up then you will be redirected to messages page again where you can now post and reply delete and edit your own messages.

