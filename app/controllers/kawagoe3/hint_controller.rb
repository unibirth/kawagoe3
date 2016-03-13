class Kawagoe3::HintController < ApplicationController
  http_basic_authenticate_with :name => ENV['BASIC_AUTH_USERNAME'], :password => ENV['BASIC_AUTH_PASSWORD'], except: :confirm if Rails.env == "production"

  def index
  end

  def confirm
  end

end
