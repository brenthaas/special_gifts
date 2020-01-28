require 'rails_helper'
include ActiveSupport::Testing::TimeHelpers

RSpec.describe FriendRequest, type: :model do
  let(:user) { FactoryBot.create :user }
  let(:friend) { FactoryBot.create :user }
  let(:friend_request) do
    FactoryBot.create :friend_request, user: user, requested_friend: friend
  end

  it 'has a valid factory' do
    expect(friend_request).to be_valid
  end

  it { is_expected.to validate_presence_of(:user_id) }
  it { is_expected.to validate_presence_of(:requested_friend_id) }

  describe '#accept!' do
    before { travel_to current_time }
    after { travel_back}

    let(:current_time) { Time.utc(2020, 10, 05) }

    it 'accepts the request' do
      expect { friend_request.accept! }
        .to change(friend_request, :accepted_at)
        .from(nil)
        .to(current_time)
    end

    it 'creates the inverse accepted FriendRequest' do
      expect { friend_request.accept! }
        .to change {
          FriendRequest.where(
            user: friend,
            requested_friend: user
          ).where.not(accepted_at: nil)
          .exists?
        }.to true
    end

    context 'when already accepted' do
      let(:accepted_request) { FactoryBot.create :friend_request, :accepted }

      it 'does not change the accepted time' do
        expect { accepted_request.accept! }
          .not_to change(friend_request, :accepted_at)
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
