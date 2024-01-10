# README

💣 Preview:

![Onebody preview](https://github.com/GabrielSandoval/onebody/assets/6015897/6379ea9a-9801-4182-8546-29664826f4c6)

Visit the demo app [here](https://onebody-challenge-98acc9160594.herokuapp.com).

## Setup

* Ruby version
`3.2.2`

* Clone the app

  ```
  git clone git@github.com:GabrielSandoval/onebody.git
  ```

* Move to app directory

  ```
  cd onebody
  ```

* Install gems

  ```
  bundle install
  ```

* Database setup

  ```
  rails db:create
  rails db:migrate
  rails db:seed  # populate your database with demo boards
  ```

* Start the rails server and visit `http://localhost:3000`:
  ```
  bin/dev
  ```

  ![Onebody Snap](https://github.com/GabrielSandoval/onebody/assets/6015897/7a712e06-3954-4d60-b976-84736d8234fb)


## Deployment

  ```
  git push heroku main
  ```
