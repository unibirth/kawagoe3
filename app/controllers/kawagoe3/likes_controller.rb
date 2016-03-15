class Kawagoe3::LikesController < ApplicationController

  def create
    Like.create(like_params)
    @senryus = Senryu.order(created_at: :desc).page(params[:page]).per(20)
  end

  private
  def like_params
    params.permit(:senryu_id).merge(user_id: session[:user_id])
  end
end
