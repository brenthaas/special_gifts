class FriendRequest < ApplicationRecord
  belongs_to :user
  belongs_to :requested_friend, class_name: 'User'

  validates :user_id, presence: true
  validates :requested_friend_id, presence: true
end
