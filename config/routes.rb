# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  root to: 'home#index'

  scope '/api/v1' do
    resources :users, only: %i[index show] do
      resources :wishes, shallow: true
      resources :friends, shallow: true
    end
  end

  get '*path', to: 'home#index'
end
