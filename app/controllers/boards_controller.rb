class BoardsController < ApplicationController
  def index
    @boards = Board.search(params[:query])
    @boards = params[:view].present? ? @boards : Kaminari.paginate_array(@boards).page(params[:page])
    @board = Board.new
  end

  def create
    @board = Board.create(board_params)
    @board.place_mines!

    respond_to do |format|
      format.html do
        redirect_to board_url(@board, format: :html), notice: "Board was successfully created."
      end
      format.json do
        render json: @board, status: :ok
      end
    end
  end

  def show
    @board = Board.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json do
        render json: @board, serializer: BoardSerializer
      end
    end
  end

  def update
    @board = Board.find(params[:id])
    @board.update(board_params)
    @board.place_mines!

    respond_to do |format|
      format.html do
        redirect_to params[:redirect_url] || board_url(@board), notice: "Board was successfully updated."
      end
      format.json do
        render json: @board, status: :ok
      end
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy

    respond_to do |format|
      format.html do
        redirect_to boards_url, notice: "Board was successfully destroyed."
      end
      format.json do
        render json: @board, serializer: BoardSerializer
      end
    end
  end

  private

  def board_params
    params.require(:board).permit(:email, :name, :width, :height, :num_mines)
  end
end
