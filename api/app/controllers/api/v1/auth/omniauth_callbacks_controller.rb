# frozen_string_literal: true

module Api
  module V1
    module Auth
      class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
        # ①セッションを有効化
        skip_before_action :skip_session

        def twitter
          callback_from :twitter
        end

        private

        def callback_from(provider)
          provider = provider.to_s

          @user = User.find_for_oauth(request.env['omniauth.auth'])

          if @user.persisted?
            flash[:notice] = I18n.t('devise.omniauth_callbacks.success', kind: provider.capitalize)
            # sign_in_and_redirect @user, event: :authentication
            sign_in_and_redirect "http://localhost:8000"
          else
            session["devise.#{provider}_data"] = request.env['omniauth.auth']
            redirect_to "new_user_registration_url"
          end
        end
      end
    end
  end
end
