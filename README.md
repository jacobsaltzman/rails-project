# The Instrument Library


## Description


This project is a full stack web application built with a React frontend, PostgresSQL, and a Ruby on Rails
backend that allows a user to borrow instruments from the library and share their experience with the community.


## Code Main Factors

- A Rails API with three models:

```ruby
class Instrument < ApplicationRecord
  has_many :loans
  has_many :members, through: :loans
end
```

```ruby
class Loan < ApplicationRecord
  belongs_to :instrument
  belongs_to :member
end
```

```ruby
class Member < ApplicationRecord
  has_many :loans
  has_many :instruments, through: :loans
end
```

- A _many-to-many_ relationship. implementing two _has many_ relationships and a **join table** with two foreign keys:

```sql
create_table "loans", force: :cascade do |t|
    t.bigint "member_id"
    t.bigint "instrument_id"
    ...
    t.index ["instrument_id"], name: "index_loans_on_instrument_id"
    t.index ["member_id"], name: "index_loans_on_member_id"
  end
```




- REST routes
-


Coming soon.


## Setup And Deployment


**Requirements**


- Ruby on Rails installed locally

- NodeJS, and npm


**Note**: to use SQLite instead of PostgreSQL:

1. In the `Gemfile`, replace `gem 'pg', '~> 1.1'` with `gem 'sqlite3', '~> 1.4'`.

2. In the `database.yml` file, change the line `adapter: postgresql` to `adapter: sqlite3`.


When you're ready to run this project, **_cd_** into the main directory and run:

```sh
npm install --prefix client
bundle install
rails db:create
rails db:migrate
```


## Deploying Locally


Now that everything is set up, to deploy it's best to set up the backend first. You can do so by opening a terminal and running:

```console
rails s
```

This will run the backend server on [http://localhost:3000](http://localhost:3000)


Leave that running, and open a new terminal. Then set up the frontend with the command:

```console
npm start --prefix client
```

This will run the frontend on [http://localhost:4000](http://localhost:4000) which you can see the _view_ in the browser.


***The completed page should look like this:***

[The Instrument Library](https://phase-4-rails-project.onrender.com)


## Resources

- [Flatiron School](https://flatironschool.com/)





###### Strumbrary, 2023