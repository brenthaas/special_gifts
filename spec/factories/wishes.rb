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

FactoryGirl.define do
  factory :wish do
    association :wisher, factory: :user
    
    title       { Faker::Hipster.sentence }
    description { Faker::Hipster.paragraph }
    url         { Faker::Internet.url }
  end
end
