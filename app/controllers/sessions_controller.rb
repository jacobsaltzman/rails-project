class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create


  def create
    user = Member.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:member_id] = user.id
      render json: user, status: :created

    else
      render json: {error: "Invalid Username or Password"}, status: :unauthorized 
    end


  end

  def destroy
    session.delete(:member_id)
  end
  
end
