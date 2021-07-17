class CreateAchievements < ActiveRecord::Migration[6.1]
  def change
    create_table :achievements do |t|
      t.string :title
      t.integer :year
      t.integer :president_id

      t.timestamps
    end
  end
end
