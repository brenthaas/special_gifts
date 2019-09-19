# frozen_string_literal: true

class CreateWishes < ActiveRecord::Migration[6.0]
  def change
    create_table :wishes do |t|
      t.text :title
      t.text :description
      t.references :wisher, references: :user, index: true

      t.timestamps
    end
  end
end
