module Api
  module V1
    class AuthsController < Base::ErrorHandlingController
        def create
          if (user = User.authenticate(params[:email], params[:password]))
            tokens = Jwt::TokenProvider.refresh_tokens user
      
            render json: { status: :success, token: tokens, user: user }
          else
            unauthorized
          end
        end
      end
    end
  end