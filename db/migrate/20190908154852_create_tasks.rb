class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.references :user
      t.references :parent, foreign_key: { to_table: :tasks }
      t.references :child, foreign_key: { to_table: :tasks }

      t.timestamps
    end
  end
end