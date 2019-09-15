require 'test_helper'

class ChildTasksControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get child_tasks_new_url
    assert_response :success
  end

  test "should get edit" do
    get child_tasks_edit_url
    assert_response :success
  end

end
