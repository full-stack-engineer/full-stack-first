module Api
    module V1
        class ParentTasksController < ApplicationController
            before_action :set_parent_task
            before_action :authenticate_api_user!

            def index
                parent_tasks = ParentTask.where(user_id: current_api_user.id).order(created_at: :asc)
                render json: { status: 'SUCCESS', message: 'Loaded parent_tasks', data: parent_tasks }
            end

            def create
                parent_task = ParentTask.new(task_params)
                parent_task.user_id = current_api_user.id
                if parent_task.save
                    render json: { status: 'SUCCESS', data: parent_task}
                else
                    render json: { status: 'ERROR', data: parent_task.errors }
                end
            end

            def destroy
                if current_api_user.id == @parent_task.user_id
                    @parent_task.destroy
                    render json: { status: 'SUCCESS', message: 'Deleted the task', data: @parent_task }
                else
                    render json: { status: 'ERROR', message: 'You do not have permission'}
                end
            end

            def update
                if current_api_user.id == @parent_task.user_id
                    if @parent_task.update(task_params)
                        render json: { status: 'SUCCESS', message: 'Updated the task', data: @parent_task }
                    else
                        render json: { status: 'ERROR', message: 'Not updated', data: @parent_task.errors }
                    end
                else
                    render json: { status: 'ERROR', message: 'You do not have permission' }
                end
            end

            private
                def set_parent_task
                    @parent_task = ParentTask.find_by(id: params[:id])
                end

                def task_params
                    params.permit(:content, :progress)
                end

        end
    end
end
