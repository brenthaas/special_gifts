FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    after(:build) { |u| u.password_confirmation = u.password = 'P@ssw0rd' }
  end
end
