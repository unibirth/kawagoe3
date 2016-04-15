class Kawagoe3::HintController < ApplicationController
  # http_basic_authenticate_with :name => ENV['BASIC_AUTH_USERNAME'], :password => ENV['BASIC_AUTH_PASSWORD'] if Rails.env == "production"

  def index
    unless params[:user_name] == "kawagoe3" &&
       params[:password] == "goemon"
       redirect_to :back, alert: "ユーザー名かパスワードが違います"
    end
  end
end
