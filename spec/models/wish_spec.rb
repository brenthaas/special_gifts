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

require 'rails_helper'

RSpec.describe Wish do
end
