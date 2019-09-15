Rails.application.routes.draw do
  devise_for :users, controllers: {
    omniauth_callbacks: 'omniauth_callbacks',
    sessions: 'users/sessions'
  }
  root 'tasks#index'
  resources :child_tasks, only:[:edit, :new]
  resources :parent_tasks, only:[:edit, :new]
end



