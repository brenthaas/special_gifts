# == Schema Information
#
# Table name: wishes
#
#  id          :integer          not null, primary key
#  title       :string
#  description :text
#  url         :text
#  wisher_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Wish < ApplicationRecord
  belongs_to :wisher, class_name: User

  validates :wisher, presence: true
  validates :title, presence: true, length: { minimum: 2, maximum: 300 }
end
