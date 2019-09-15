Rails.application.routes.draw do
  get 'parent_tasks/new'
  get 'parent_tasks/edit'
  get 'child_tasks/new'
  get 'child_tasks/edit'
  devise_for :users, controllers: {
    omniauth_callbacks: 'omniauth_callbacks',
    sessions: 'users/sessions'
  }
  root 'user#index'
  resources :child_tasks, only[:edit, :new]
  resources :parent_tasks, only[:edit, :new]
end



