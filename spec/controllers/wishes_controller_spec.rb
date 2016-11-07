require 'rails_helper'

RSpec.describe WishesController do
  let(:wish) { FactoryGirl.build_stubbed(:wish) }
  let(:user) { wish.wisher }

  describe 'without authorization' do
    context '#show' do
      subject { get :show, params: { id: wish.id, user_id: user.id } }
      it { is_expected.to redirect_to new_user_session_path }
    end
  end

  context "when authorized" do
    before { sign_in user }

    describe '#show' do
      subject(:get_show) { get :show, params: { id: wish.id, user_id: user.id } }

      context "when the wish is found" do
        before do
          allow(user.wishes).to receive(:find).with(wish.id.to_s).and_return(wish)
        end

        it { is_expected.to have_http_status :ok }
      end
    end
  end
end
