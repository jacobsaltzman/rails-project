class UpdateLoans < ActiveRecord::Migration[6.1]
  def change
    change_table :loans do |t|
      t.remove :status
      t.remove :start_date
      t.remove :end_date
      t.boolean :returned, default: false
      t.string :experience
    end
  end
end
