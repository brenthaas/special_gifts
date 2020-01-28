# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  name                   :string
#

# User - kinda obvious, no?
class User < ApplicationRecord
  devise :confirmable,
         :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable

  has_many :wishes,
           foreign_key: :wisher_id,
           inverse_of: :wisher,
           dependent: :destroy

  has_many :friend_requests, dependent: :destroy
  has_many :friends,
           through: :friend_requests,
           source: :requested_friend

  validates :name, presence: true
  validates :email, presence: true
end
