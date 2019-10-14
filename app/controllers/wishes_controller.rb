class WishesController < ApplicationController
  before_action :check_authentication

  def index
    @wishes = current_user.wishes
  end

  private

  def check_authentication
    not_found unless current_user.id.to_s == params[:user_id]
  end
end
