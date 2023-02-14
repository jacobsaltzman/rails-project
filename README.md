# The Instrument Library


## Description


This project is a full stack web application built with a React frontend, PostgresSQL, and a Ruby on Rails
backend that allows users to borrow instruments from the library and share their experiences with the community.


## User Experience


Users (or *members*, really, since it is a library after all) land on the site at the home page where they can signup or login. From there, once authenticated, members can browse through the _instruments_, check out their _account_ information and review their loans, or read the _experience_ that others had with their own loans. The user can **create** a loan for an individual instrument themselves, **read** the information of the loan (e.g. start date) and their previous loans, **update** their loan by returning the instrument (and giving details of their experience if they want to) and also editing previously made "experience" comments, or **delete** that loan if they decide later to not "check out" said instrument (only permitted for that period of time between selecting the instrument and picking it up).

There is also a _donate_ ability, where members can designate an instrument that they will be giving up to the library. In a real-world situation, this instrument would then be reviewed and it would be determined whether the library needs/wants the instrument depending on its type and state, eventually appending the necessary ones to the comprehensive list of available instruments.


## MVP Code Main Factors

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


- REST routes and Full **CRUD** actions for the _loan_ model (as mentioned in the User Experience), and at least *Read* and *Create* for the other two:

```ruby
resources :loans, only: [:index, :show, :create, :update, :destroy]
```

- Client-side routing on a single-page application using React.

- Authentication, data validation, and error rendering built into the API.


## Setup And Deployment

**Requirements**

- Ruby on Rails installed locally
- NodeJS, and npm

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


## Resources and Notes

**Note:** to use SQLite instead of PostgreSQL:

1. In the `Gemfile`, replace `gem 'pg', '~> 1.1'` with `gem 'sqlite3', '~> 1.4'`.

2. In the `database.yml` file, change the line `adapter: postgresql` to `adapter: sqlite3`.

- [Flatiron School](https://flatironschool.com/)


**Future Stretch Goals:**

- Allow members to "Lend" an instrument. Instead of donating it, this will assign their ID to that instrument, allowing them to be attached to it and do things with in the future like take it back or get rewards for having a popular item.
- Search function for instruments and history.
- Separate the 'experience' and 'loan' models to expand on both.
- Add a 'locations' component, if there were multiple physical pickup locations.
- Add 'admin' functionality to allow a super-user to make global changes to all the models and components. 


###### Strumbrary, 2023