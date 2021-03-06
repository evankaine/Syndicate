Rails.application.routes.draw do
  resources :tips
  resources :legends do 
  resources :tips, only: :create
  end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
