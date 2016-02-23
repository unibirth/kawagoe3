require 'test_helper'

class Kawagoe3::TopControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
