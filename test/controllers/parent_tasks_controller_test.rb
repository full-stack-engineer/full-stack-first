require 'test_helper'

class ParentTasksControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get parent_tasks_new_url
    assert_response :success
  end

  test "should get edit" do
    get parent_tasks_edit_url
    assert_response :success
  end

end
