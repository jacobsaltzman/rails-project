class MembersController < ApplicationController
  skip_before_action :authorize, only: :create

  def show
    render json: @current_user, status: :ok
  end

  def create
    user = Member.create!(member_params)
    session[:member_id] = user.id
    render json: user, status: :ok
  end


  private

  def member_params
    params.permit(:username, :password, :email)
  end
end
