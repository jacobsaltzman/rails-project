class CreateInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :instruments do |t|
      t.string :name
      t.string :brand
      t.string :condition
      t.string :image

      t.timestamps
    end
  end
end
