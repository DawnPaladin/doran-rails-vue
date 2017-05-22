Rails.application.routes.draw do

  devise_for :users

  resources :champions, only: [:index]

  root to: 'champions#index'

end
