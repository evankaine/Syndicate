class LegendsController < ApplicationController
  before_action :set_legend, only: [:show, :update, :destroy]

  # GET /legends
  def index
    @legends = Legend.all

    render json: @legends
  end

  # GET /legends/1
  def show
    render json: @legend, include: {tips:{include: {user: {only: :username}}}}
  end

  # POST /legends
  def create
    @legend = Legend.new(legend_params)

    if @legend.save
      render json: @legend, status: :created, location: @legend
    else
      render json: @legend.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /legends/1
  def update
    if @legend.update(legend_params)
      render json: @legend
    else
      render json: @legend.errors, status: :unprocessable_entity
    end
  end

  # DELETE /legends/1
  def destroy
    @legend.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_legend
      @legend = Legend.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def legend_params
      params.require(:legend).permit(:name, :legend_image_url, :passive_name, :passive_image_url, :tactical_name, :tactical_image_url, :ultimate_name, :ultimate_image_url, :lore)
    end
end
