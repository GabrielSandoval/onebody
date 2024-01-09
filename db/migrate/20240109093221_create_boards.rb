class CreateBoards < ActiveRecord::Migration[7.1]
  def change
    create_table :boards do |t|
      t.string :email
      t.string :name
      t.integer :width
      t.integer :height
      t.integer :num_mines
      t.text :locations

      t.timestamps
    end
  end
end
