class ChampionsController < ApplicationController

  def index
    render json: Champion.all, only: [:name, :portrait]
  end
end
