class CreateWishes < ActiveRecord::Migration[5.0]
  def change
    create_table :wishes do |t|
      t.string :title
      t.text :description
      t.text :url
      t.references :wisher, references: :user, index: true

      t.timestamps
    end
  end
end
