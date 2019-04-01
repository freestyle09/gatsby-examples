# Simple REST api

Great tutorial was used:

https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

# HTTPie

https://httpie.org/

List tasks

    http http://localhost:3000/tasks name="Some task"
    
Create taks

    http POST --form http://localhost:3000/tasks name="Some task"