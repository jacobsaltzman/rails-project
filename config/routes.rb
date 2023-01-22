Rails.application.routes.draw do
  resources :loans, only: [:show, :create]
  resources :members, only: [:show, :create]
  resources :instruments, only: [ :index, :show, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
