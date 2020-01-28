require 'rails_helper'
include ActiveSupport::Testing::TimeHelpers

RSpec.describe FriendRequest, type: :model do
  let(:friend_request) { FactoryBot.create :friend_request }

  it 'has a valid factory' do
    expect(friend_request).to be_valid
  end

  it { is_expected.to validate_presence_of(:user_id) }
  it { is_expected.to validate_presence_of(:requested_friend_id) }

  describe '#accept!' do
    before { travel_to current_time }
    after { travel_back}

    let(:current_time) { Time.utc(2020, 10, 05) }

    context 'when not accepted' do
      it 'accepts the request' do
        expect { friend_request.accept! }
          .to change(friend_request, :accepted_at)
          .from(nil)
          .to(current_time)
      end
    end

    context 'when already accepted' do
      let(:accepted_request) { FactoryBot.create :friend_request, :accepted }

      it 'does not change the accepted time' do
        expect { accepted_request.accept! }
          .not_to change(friend_request, :accepted_at)
      end

      it 'makes the user friends with the requested user' do
        expect(accepted_request.user.friends)
          .to include accepted_request.requested_friend
      end
    end
  end

  describe '#accepted?' do
    subject { friend_request.accepted? }

    context 'when not accepted' do
      it { is_expected.to be false }
    end

    context 'when accepted' do
      let(:friend_request) do
        FactoryBot.build_stubbed :friend_request, :accepted
      end

      it { is_expected.to be true }
    end
  end
end
