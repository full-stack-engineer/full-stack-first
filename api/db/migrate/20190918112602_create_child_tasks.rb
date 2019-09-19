class CreateChildTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :child_tasks do |t|
      t.string :content
      t.references :parent_task, null: false, foreign_key: true
      t.integer :progress

      t.timestamps
    end
  end
end
