class TipsController < ApplicationController
  before_action :set_tip, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /tips
  def index
    @tips = Tip.all

    render json: @tips
  end

  # GET /legends/1/tips/2
  def add_to_legend
    @legend = Legend.find(params[:legend_id])
    @legend.tips << @tip

    render json: @legend, include: :tips
  end

  # GET /tips/1
  def show
    render json: @tip
  end

  # POST /tips
  def create
    @tip = Tip.new(tip_params)
    @tip.user = @current_user
    if @tip.save
      render json: @tip, status: :created, location: @tip
    else
      render json: @tip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tips/1
  def update
    if @tip.update(tip_params)
      render json: @tip
    else
      render json: @tip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tips/1
  def destroy
    @tip.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tip
      @tip = Tip.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tip_params
      params.require(:tip).permit(:user_id, :legend_id, :text)
    end
end
