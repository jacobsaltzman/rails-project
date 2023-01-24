class MembersController < ApplicationController

  def show
    user = Member.find(params[:id])
    render json: user, status: :ok
  end

  def create
    user = Member.create(member_params)
    session[:member_id] = user.id
    render json: user, status: :ok
  end


  private

  def member_params
    params.permit(:username, :password, :email)
  end
end
