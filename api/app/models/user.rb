class User < ApplicationRecord
  has_many :parent_tasks, dependent: :destroy
  authenticates_with_sorcery!

  attribute :password, :string
  attribute :password_confirmation, :string

  validates :password, presence: true, length: { minimum: 3 }, if: -> { new_record? || changes[:crypted_password] }
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }

  validates :email, uniqueness: true
end
