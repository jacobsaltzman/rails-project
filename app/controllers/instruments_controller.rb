class InstrumentsController < ApplicationController

 # GET /instruments
  # return all of the instruments
  def index
    render json: Instrument.all, status: :ok
  end

  def create
    byebug
  end



  private 

  def instrument_params
    params.permit(:name, :condition, :image, :description, :member_id)
  end

end
