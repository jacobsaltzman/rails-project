class LoansController < ApplicationController

  def show
    loan = Loan.find(params[:id])
    render json: loan, status: :ok
  end

  def create
    loan = Loan.create(loan_params)
    render json: loan, status: :created
  end


  private

  def loan_params
    params.permit(:member_id, :instrument_id, :start_date, :end_date, :status)
  end


end
