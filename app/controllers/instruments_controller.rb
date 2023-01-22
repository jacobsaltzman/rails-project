class InstrumentsController < ApplicationController

 # GET /instruments
  # return all of the instruments
  def index
    render json: Instrument.all, status: :ok
  end

end
