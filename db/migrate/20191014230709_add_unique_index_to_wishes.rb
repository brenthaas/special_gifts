class AddUniqueIndexToWishes < ActiveRecord::Migration[6.0]
  def change
    add_index :wishes, %i[title wisher_id], unique: true
  end
end
