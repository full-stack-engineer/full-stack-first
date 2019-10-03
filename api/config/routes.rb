# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :parent_tasks
      resources :child_tasks

      resources :users, only: [:create]
      resources :auths, only: [:create]

      post 'register' => 'users#create'
      post 'login' => 'auths#create'
    end
  end
  # root 'home#about'
end
