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
end
