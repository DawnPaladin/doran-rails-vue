class ChampionsController < ApplicationController

  def index
    @champs = Champion.all
    respond_to do |format|
      format.html
      format.json { render json: @champs, only: [:name, :portrait, :strengths, :weaknesses] }
    end
  end
end
