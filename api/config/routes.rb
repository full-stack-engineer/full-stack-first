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
      # post "oauth/callback" => "oauths#callback"
      # get "oauth/callback" => "oauths#callback" # for use with Github, Facebook
      get "oauth/twitter_callback" => "oauths#twitter_callback"
      get "oauth/:provider" => "oauths#oauth", :as => :auth_at_provider
    end
  end
  # root 'home#about'
end
