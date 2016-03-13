class CreateSenryus < ActiveRecord::Migration
  def change
    create_table :senryus do |t|
      t.string :name
      t.integer :age
      t.string :theme
      t.string :senryu_top
      t.string :senryu_middle
      t.string :senryu_bottom

      t.timestamps
    end
  end
end
