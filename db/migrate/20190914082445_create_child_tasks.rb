class CreateChildTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :child_tasks do |t|
      t.string :content
      t.references :parent_task, foreign_key: true
      t.integer :progress

      t.timestamps
    end
  end
end
