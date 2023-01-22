class LoansController < ApplicationController

 
  # GET /loans/:id
  #return individual instance of a loan
  def show
    loan = Loan.find(params[:id])
    render json: loan, status: :ok
  end


end
