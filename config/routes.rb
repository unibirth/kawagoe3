Rails.application.routes.draw do
  namespace :kawagoe3 do
    namespace :admin do
    end
    root 'top#index'
    resources :hint, only: :index
  end
end
