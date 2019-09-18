# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :parent_tasks, dependent: :destroy
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable
  include DeviseTokenAuth::Concerns::User
end
