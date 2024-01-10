# README

💣 Preview:

![Onebody preview](https://github.com/GabrielSandoval/onebody/assets/6015897/e591e466-2530-4f7d-a7fd-0aa02969da15)


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
