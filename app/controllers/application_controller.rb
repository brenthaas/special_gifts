# frozen_string_literal: true

class ApplicationController < ActionController::Base
  delegate :alert, :notice, to: :flash

  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  protected

  def not_found
    render plain: "404 Not Found", status: 404
  end
end
