class Kawagoe3::LikesController < ApplicationController

  def create
    Like.create(like_params)
  end

  private
  def like_params
    params.permit(:senryu_id).merge(user_id: session[:user_id])
  end
end
