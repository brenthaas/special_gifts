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

require 'rails_helper'

RSpec.describe Wish do
  it { is_expected.to validate_presence_of(:wisher) }
  it { is_expected.to validate_presence_of(:title) }
end
