class AddUserIdToInstruments < ActiveRecord::Migration[6.1]
  def change
    add_column :instruments, :member_id, :integer
  end
end
