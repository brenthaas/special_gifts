# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Wishes', type: :request do
  describe 'index' do
    describe 'GET /users/:id/wishes' do
      let(:user) { FactoryBot.create :user }
      let(:user_id) { user.id }

      let(:json_response) { JSON.parse(response.body) }

      context 'when the user is NOT logged in' do
        it 'redirects to the sign_in page' do
          get user_wishes_path(user)
          expect(response).to be_not_found
        end
      end

      context 'when the user is signed in' do
        let!(:user_wishes) { FactoryBot.create_list(:wish, 2, wisher: user) }
        let!(:other_wishes) { FactoryBot.create_list(:wish, 2) }

        before { sign_in user}

        it 'responds successfully with all wishes made by the user' do
          get user_wishes_path(user)
          expect(response).to be_ok
          expect(json_response.pluck('id')).to match_array user_wishes.map(&:id)
        end

        context 'when requesting the wishes of another user' do
          # this will change when we get friends
          it 'is not allowed' do
            get user_wishes_path(other_wishes.first.wisher)
            expect(response).to be_not_found
          end
        end
      end
    end
  end
end
