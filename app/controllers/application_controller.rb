# frozen_string_literal: true

class ApplicationController < ActionController::Base
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  protected

  def not_found
    render plain: "404 Not Found", status: 404
  end
end
