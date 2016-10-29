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
  it 'has a valid factory' do
    expect(FactoryGirl.create(:wish)).to be_valid
  end

  it { is_expected.to validate_presence_of(:wisher) }
  it { is_expected.to validate_presence_of(:title) }
end
