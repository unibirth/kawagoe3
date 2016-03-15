class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :log_in

  def create_user
    user = User.create
    session[:user_id] = user.id
  end

  def log_in
    if session[:user_id].blank?
      create_user
    else
      user = User.find(session[:user_id])
      if Time.zone.now > user.created_at + 1.day
        reset_session
        user.destroy
        create_user
      end
    end
  end
end
