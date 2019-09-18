# frozen_string_literal: true

# == Schema Information
#
# Table name: wishes
#
#  id          :bigint           not null, primary key
#  title       :text
#  description :text
#  wisher_id   :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Wish < ApplicationRecord
  belongs_to :wisher, class_name: 'User'

  validates :wisher, presence: true
  validates :title, presence: true
end
