# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_190_918_112_602) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'child_tasks', force: :cascade do |t|
    t.string 'content'
    t.bigint 'parent_task_id', null: false
    t.integer 'progress'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['parent_task_id'], name: 'index_child_tasks_on_parent_task_id'
  end

  create_table 'parent_tasks', force: :cascade do |t|
    t.string 'content'
    t.bigint 'user_id', null: false
    t.integer 'progress'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['user_id'], name: 'index_parent_tasks_on_user_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'provider', default: 'email', null: false
    t.string 'uid', default: '', null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.boolean 'allow_password_change', default: false
    t.datetime 'remember_created_at'
    t.integer 'sign_in_count', default: 0, null: false
    t.datetime 'current_sign_in_at'
    t.datetime 'last_sign_in_at'
    t.string 'current_sign_in_ip'
    t.string 'last_sign_in_ip'
    t.string 'name'
    t.string 'nickname'
    t.string 'image'
    t.string 'email'
    t.json 'tokens'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.text 'credentials'
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
    t.index %w[uid provider], name: 'index_users_on_uid_and_provider', unique: true
  end

  add_foreign_key 'child_tasks', 'parent_tasks'
  add_foreign_key 'parent_tasks', 'users'
end
