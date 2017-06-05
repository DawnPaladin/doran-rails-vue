class RostersController < ApplicationController

  def show
    @roster = Roster.find_by_id(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @roster }
    end
  end
end
