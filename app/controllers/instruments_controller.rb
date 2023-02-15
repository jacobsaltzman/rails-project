class InstrumentsController < ApplicationController
  skip_before_action :authorize, only: :index

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


  private 

  def instrument_params
    params.permit(:name, :condition, :image, :description)
  end

end
