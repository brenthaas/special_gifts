# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  root to: 'home#index'

  resources :users, only: %i[index show] do
    resources :wishes, shallow: true
  end
end
