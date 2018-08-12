class HomeController < ApplicationController
  before_action :check_auth

  private

  def check_auth
    redirect_to new_user_session_url unless user_signed_in?
  end
end
