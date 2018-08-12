class CreateFriendRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :friend_requests do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :requested_friend, foreign_key: { to_table: 'users' }
      t.timestamp :accepted_at

      t.timestamps
    end
  end
end
