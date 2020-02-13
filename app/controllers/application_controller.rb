# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include ::ActionController::Cookies

  before_action :authenticate_user!
  before_action :set_csrf_token

  delegate :alert, :notice, to: :flash

  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  protected

  def not_found
    render plain: "404 Not Found", status: 404
  end

  def set_csrf_token
    cookies['CSRF-TOKEN'] = form_authenticity_token if user_signed_in?
  end
end
