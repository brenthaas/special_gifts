class Wish < ApplicationRecord
  belongs_to :wisher, class_name: User
end
