class Kawagoe3::SenryuController < ApplicationController

  def index
    @senryus = Senryu.order(created_at: :desc).page(params[:page]).per(20)
  end

  def like
    senryu_ids = Like.group(:senryu_id).order('count_senryu_id DESC').count(:senryu_id).keys
    senryus = senryu_ids.map{ |id| Senryu.find(id)}
    @senryus = Kaminari.paginate_array(senryus).page(params[:page]).per(20)
    render :index
  end

  def new
    @senryu = Senryu.new
  end

  def create
    @senryu = Senryu.new(senryu_params)
    if @senryu.save
      redirect_to kawagoe3_senryu_index_path, notice: "川柳を投稿しました"
    else
      render :new
    end
  end

  private
  def senryu_params
    params.require(:senryu).permit(:name, :age, :theme, :senryu_top, :senryu_middle, :senryu_bottom)
  end
end
