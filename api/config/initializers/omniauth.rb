# frozen_string_literal: true

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV.fetch('API_KEY'), ENV.fetch('API_KEY_SECRET'),
          callback_url: 'http://localhost:3000/api/v1/auth/twitter/callback'
end
