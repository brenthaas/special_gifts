require 'rails_helper'

RSpec.describe "Homes", type: :request do
  describe "GET /" do
    subject { get '/' }

    context 'when the user is NOT logged in' do
      it "redirects to the sign_in page" do
        is_expected.to redirect_to new_user_session_url
      end
    end

    context 'when the user is signed in' do
      let(:user) { FactoryBot.create(:user) }

      before do
        sign_in user
        get '/'
      end

      it 'has a successful response' do
        expect(response).to be_ok
      end
    end
  end
end
