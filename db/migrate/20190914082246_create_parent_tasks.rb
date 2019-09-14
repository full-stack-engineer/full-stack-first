class CreateParentTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :parent_tasks do |t|
      t.string :content
      t.references :user, foreign_key: true
      t.integer :progress

      t.timestamps
    end
  end
end
