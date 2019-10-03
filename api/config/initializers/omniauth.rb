# frozen_string_literal: true

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV.fetch('API_KEY'), ENV.fetch('API_KEY_SECRET'), callback_url: "http://127.0.0.1/api/v1/auth/twitter/callback"
end
