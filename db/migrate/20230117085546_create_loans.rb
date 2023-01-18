class CreateLoans < ActiveRecord::Migration[6.1]
  def change
    create_table :loans do |t|
      t.belongs_to :member, null: false, foreign_key: true
      t.belongs_to :instrument, null: false, foreign_key: true
      t.date :start_date
      t.date :end_date
      t.string :status
      t.timestamps
    end
  end
end
