class Kawagoe3::HintController < ApplicationController
  before_filter :basic

  def index
  end

  private
  def basic
    authenticate_or_request_with_http_basic do |user, pass|
      user == 'unibirth' && pass == 'kawagoe3'
    end
  end
end
