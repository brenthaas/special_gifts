require 'rails_helper'

RSpec.describe WishesController do
  describe '#show' do
    let(:wish) { FactoryGirl.build_stubbed(:wish) }
    let(:user) { wish.wisher }

    subject(:get_show) { get :show, params: { id: wish.id, user_id: user.id } }

    context "when the user is not logged in" do
      it { is_expected.to redirect_to new_user_session_path }
    end

    context "when the wish is found" do
      before do
        allow(Wish).to receive(:find).with(wish.id).and_return(wish)
        sign_in user
      end

      it { is_expected.to have_http_status :ok }
    end
  end
end
