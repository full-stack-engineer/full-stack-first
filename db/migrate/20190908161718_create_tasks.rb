class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.references :user, foreign_key: true
      t.integer :parent_id
      t.integer :child_id

      t.timestamps
    end
  end
end
