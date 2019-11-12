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

FactoryBot.define do
  factory :wish do
    association :wisher, factory: :user

    title       { Faker::Hipster.sentence }
    description { Faker::Hipster.paragraph }
  end
end
