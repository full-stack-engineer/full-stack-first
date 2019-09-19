class CreateParentTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :parent_tasks do |t|
      t.string :content
      t.references :user, null: false, foreign_key: true
      t.integer :progress

      t.timestamps
    end
  end
end
