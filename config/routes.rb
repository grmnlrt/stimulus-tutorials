Rails.application.routes.draw do
  root to: 'pages#home'
  resources :movies, only: :index
  get '/character-counter', to: "pages#character_counter"
end
