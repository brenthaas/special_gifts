# frozen_string_literal: true

class HomeController < ApplicationController
  before_action :check_auth

  def index; end

  private

  def check_auth
    redirect_to new_user_session_url unless user_signed_in?
  end
end
