# frozen_string_literal: true

module Api
  module V1
    class ParentTasksController < Base::ErrorHandlingController
      before_action :set_parent_task
      before_action :authenticate!

      def index
        parent_tasks = ParentTask.where(user_id: current_user.id).order(created_at: :asc)
        render json: { status: 'SUCCESS', message: 'Loaded parent_tasks', data: parent_tasks }
      end

      def create
        parent_task = ParentTask.new(task_params)
        parent_task.user_id = current_user.id
        if parent_task.save
          render json: { status: 'SUCCESS', data: parent_task }
        else
          render json: { status: 'ERROR', data: parent_task.errors }, status: 400
        end
      end

      def destroy
        return render json: { status: 'ERROR', message: 'You do not have permission' }, status: 403 unless current_user.id == @parent_task.user_id

        @parent_task.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the task', data: @parent_task }
      end

      def update
        return render json: { status: 'ERROR', message: 'You do not have permission' }, status: 403 unless current_user.id == @parent_task.user_id

        if @parent_task.update(task_params)
          render json: { status: 'SUCCESS', message: 'Updated the task', data: @parent_task }
        else
          render json: { status: 'ERROR', message: 'Not updated', data: @parent_task.errors }, status: 400
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
