class WishesController < ApplicationController
  before_action :load_wish, only: %i[show edit update delete]
  before_action :check_authorization, only: %i[index new create]

  def create
    created_wish = current_user.wishes.build(wish_params)

    if created_wish.save
      redirect_to user_wishes_path(current_user)
    else
      flash[:alert] = 'Unable to save wish: ' \
        "#{created_wish.errors.full_messages.to_sentence}"
      render :new
    end
  end

  def destroy
    if @wish.destroy
      flash[:notice] = "Wish for '#{@wish.title}' destroyed"
      redirect_to user_wishes_path(current_user)
    else
      flash[:alert] = 'Unable to delete wish: ' \
        "#{created_wish.errors.full_messages.to_sentence}"
      redirect_to user_wishes_path(current_user)
    end
  end

  def edit
    @wisher_name = wisher_name
  end

  def index
    @wishes = current_user.wishes
  end

  def show
    @wisher_name = wisher_name
  end

  def update
    if @wish.update(wish_params)
      flash.discard
      redirect_to wish_path(@wish), notice: 'Wish updated'
    else
      flash[:alert] = 'Unable to update wish: ' \
        "#{@wish.errors.full_messages.to_sentence}"
      render :edit
    end
  end

  private

  def check_authorization
    not_found unless current_user.id.to_s == params[:user_id]
  end

  def load_wish
    @wish = current_user.wishes.find(params[:id])
  end

  def wish_params
    params.require(:wish).permit(:title, :description)
  end

  def wisher_name
    @wish.wisher == current_user ? 'your' : "#{@wish.wisher.name}'s"
  end
end
