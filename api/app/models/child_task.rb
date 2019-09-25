# frozen_string_literal: true

class ChildTask < ApplicationRecord
  belongs_to :parent_task
end
