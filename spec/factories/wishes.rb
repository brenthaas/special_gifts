FactoryGirl.define do
  factory :wish do
    association :wisher, factory: :user
    
    title       { Faker::Hipster.sentence }
    description { Faker::Hipster.paragraph }
    url         { Faker::Internet.url }
  end
end
