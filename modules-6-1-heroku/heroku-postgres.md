autoscale: true

# Heroku: Postgres Database

---

## Where We Are Now

* We've made an express app that can live both on our local machine, and on Heroku
* However, now our Express applications also use a Postgres database to server up content
* But if we try to run one of these applications on Heroku, we'd just get errors about there being no Postgres database available

---

## Heroku Addons

* Because developers use all kinds of software for things like databases, mail servers, API integrations, Heroku has an addon system to hook in to other software
* Addons can be installed on the command line using the `heroku addons` command
* They can also be installed on the web at the "Resources" panel of your app
* Some addons cost money, so be careful when installing them

---

## Installing Postgres

```
heroku addons:create heroku-postgresql:hobby-dev
```

* Run this command inside of your Heroku project to add the `heroku-postgresql` addon to your app
* The `hobby-dev` portion of the command indicates we'll be using the hobby tier of this addon, which costs no money
* Running this will install the addon, create a database for you to use, and add a new environment variable called `DATABASE_URL` that contains all of the information we'll need to connect to Heroku's database

---

## Side Note: Heroku Config

* Heroku injects a few environment variables by default, but you can add your own by adding things to the Heroku config
* `DATABASE_URL` is one of these, that the `heroku-postgresql` addon adds for us
* We can inspect them by running `heroku config`
* We can set our own by running `heroku config:set [KEY=VALUE]`
* You can also inspect and change them on the web under the "Settings" panel

---

## Accessing Postgres on Heroku

* Beyond creating a database, we'll also need to create the same tables we made locally
* We can access a SQL command line by running `heroku pg:psql`
* This will allow us to write any of the same queries we've written in our GUI, like `CREATE TABLE`
* You can also try to use your GUI to connect to the database, using the `DATABASE_URL` config variable, but this may be tough depending on your GUI

---

## Fixing up our Postgres Node Code

* A quick problem we have to solve is that Heroku provides a URL for connection, rather than each of the pieces of information seperately (Port, username, password etc.)
* To get around that, we just need to add some code that breaks down one of these URLs in to separate pieces
* You can find an updated version of the query module here:

[https://gist.github.com/wbobeirne/1dee2743d6ee6f723a66908eaee009c2](https://gist.github.com/wbobeirne/1dee2743d6ee6f723a66908eaee009c2)

---

## Additional Reading

* [Heroku's Node Intro: Databases](https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database)
* [Heroku's Full docs on Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql)
