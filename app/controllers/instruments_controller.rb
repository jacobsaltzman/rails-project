class InstrumentsController < ApplicationController

 # GET /instruments
  # return all of the instruments
  def index
    render json: Instrument.all, status: :ok
  end

  def show
    instrument = Instrument.find(params[:id])
    render json: instrument, status: :ok
  end

  def create
    instrument = Instrument.create!(instrument_params)
    render json: instrument, status: :created
  end


  def update
    instrument = Instrument.find(params[:id])
    instrument.update(instrument_params)
    render json: instrument, status: :ok
  end


  def destroy
    instrument = Instrument.find(params[:id])
    instrument.destroy
    head :no_content
  end



  private 

  def instrument_params
    params.permit(:name, :condition, :image, :description, :member_id)
  end

end
