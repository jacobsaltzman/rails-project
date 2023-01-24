class InstrumentsController < ApplicationController

 # GET /instruments
  # return all of the instruments
  def index
    render json: Instrument.all, status: :ok
  end

  def create
    instrument = Instrument.create(instrument_params)
    render json: instrument, status: :created
  end


  def update
    instrument = Instrument.find(params[:id])
    instrument.update(instrument_params)
    render json: instrument, status: :ok
  end



  private 

  def instrument_params
    params.permit(:name, :condition, :image, :description, :member_id)
  end

end
