Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: 'members#show'
  post "/signup", to: "members#create"


  resources :loans, only: [:index, :show, :create, :update, :destroy]
  resources :members, only: [:show, :create]
  resources :instruments, only: [:index, :show, :create]


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
