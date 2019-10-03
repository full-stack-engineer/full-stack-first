# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.create!(
  [
    {
      email: 'kalupas@example.com',
      password: 'hogehoge',
      password_confirmation: 'hogehoge'
    },
    {
      email: 'ebiebi@example.com',
      password: 'unchidane',
      password_confirmation: 'unchidane'
    },
    {
      email: 'miyo@example.com',
      password: 'dancerprogrammer',
      password_confirmation: 'dancerprogrammer'
    }
  ]
)

40.times do |_n|
  content = Faker::Games::Pokemon.name
  user_id = rand(1..3)
  progress = 0
  ParentTask.create!(content: content,
                     user_id: user_id,
                     progress: progress)
end
