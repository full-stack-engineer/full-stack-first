Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
          registrations: 'api/v1/auth/registrations',
          omniauth_callbacks: 'api/v1/auth/omniauth_callbacks'
      }
    end
  end
  # root 'home#about'
 end