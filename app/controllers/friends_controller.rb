class FriendsController < ApplicationController
  before_action :authorize_user

  def index
    render json: current_user.friends
  end

  private

  def authorize_user
    puts "authorizing friends"
    not_found unless params[:user_id] == current_user.id.to_s
  end
end
