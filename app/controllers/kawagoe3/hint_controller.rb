class Kawagoe3::HintController < ApplicationController
  # before_filter :basic
  http_basic_authenticate_with :name => ENV['BASIC_AUTH_USERNAME'], :password => ENV['BASIC_AUTH_PASSWORD'] if Rails.env == "production"

  def index
  end

  # private
  # def basic
  #   authenticate_or_request_with_http_basic do |user, pass|
  #     user == ENV['BASIC_AUTH_USERNAME'] && pass == ENV['BASIC_AUTH_PASSWORD'] if Rails.env == "production"
  #   end
  # end
end
