module Kawagoe3::LikesHelper
  def likes_count(senryu)
    senryu.likes.count
  end

  def is_like(senryu)
    Like.find_by(senryu_id: senryu.id, user_id: session[:user_id])
  end
end
