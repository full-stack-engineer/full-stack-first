# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :parent_tasks, dependent: :destroy
  include DeviseTokenAuth::Concerns::User
  devise :omniauthable,
        :database_authenticatable, :registerable,
        :recoverable, :rememberable, :trackable, :validatable,
        :omniauthable,
        omniauth_providers: %i[twitter]


  def self.find_for_oauth(auth)
    user = User.where(uid: auth.uid, provider: auth.provider).first

    user ||= User.create(
      provider: auth.provider,
      uid: auth.uid,
      username: auth.info.nickname,
      email: User.dummy_email(auth),
      password: Devise.friendly_token[0, 20]
    )

    user
  end

  private

  # ダミーのアドレスを用意
  def self.dummy_email(auth)
    "#{auth.uid}-#{auth.provider}@example.com"
  end
end
