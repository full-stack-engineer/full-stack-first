# frozen_string_literal: true

class ParentTask < ApplicationRecord
  belongs_to :user
  has_many :child_tasks, dependent: :destroy
end
