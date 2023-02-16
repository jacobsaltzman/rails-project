class LoansController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Loan.all, status: :ok
  end


  def show
    loan = Loan.find(params[:id])
    render json: loan, status: :ok
  end

  def create
    loan = Loan.create!(loan_params)
    render json: loan, status: :created
  end

  def update
    loan = Loan.find(params[:id])
    loan.update(loan_params)
    render json: loan, status: :ok
  end


  def destroy
    loan = Loan.find(params[:id])
    loan.destroy
    head :no_content
  end


  private

  def loan_params
    params.permit(:member_id, :loan_id, :returned, :experience)
  end


end
