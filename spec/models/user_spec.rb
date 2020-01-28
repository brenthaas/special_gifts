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

require 'rails_helper'

RSpec.describe User do
  let(:user) { FactoryBot.create(:user) }

  it 'has a valid factory' do
    expect(user).to be_valid
  end

  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:email) }

  describe 'friendships' do
    context 'when a FriendRequest has been accepted' do
      let!(:friend_request) do
        FactoryBot.create :friend_request,
                          user: user,
                          requested_friend: friend
      end
      let(:friend) { FactoryBot.create :user }

      specify 'the user is friends with the requested user' do
        expect(user.friends).to include friend
      end
    end
  end
end
