Rails.application.routes.draw do
  devise_for :users, controllers: {
    omniauth_callbacks: 'omniauth_callbacks' ,
    sessions: 'users/sessions'
  }
  root 'user#index'
end



