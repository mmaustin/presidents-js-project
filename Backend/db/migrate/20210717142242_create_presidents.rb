class CreatePresidents < ActiveRecord::Migration[6.1]
  def change
    create_table :presidents do |t|
      t.string :name

      t.timestamps
    end
  end
end
