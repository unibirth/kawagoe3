Rails.application.routes.draw do
  namespace :kawagoe3 do
    namespace :admin do
    end
    root 'top#index'
    resources :hint, only: :index
    resources :confirm, only: :index
    resources :nazodan, only: :index
    resources :senryu, only: [:index, :new, :create] do
      collection do
        get :like
      end
    end
    resources :likes, only: :create
  end
end
