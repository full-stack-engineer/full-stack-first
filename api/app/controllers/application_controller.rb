# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :skip_session
  before_action :configure_permitted_parameters,
                if: :devise_controller?

  protected

  def skip_session
    request.session_options[:skip] = true
  end

  def configure_permitted_parameters
    return if params[:provider] == 'twitter'

    devise_parameter_sanitizer.permit(:sign_up, keys: %i[email password])
    devise_parameter_sanitizer.permit(:sign_in, keys: %i[email password format])
  end
end
