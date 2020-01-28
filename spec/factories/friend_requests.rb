FactoryBot.define do
  factory :friend_request do
    user
    association :requested_friend, factory: :user
    created_at { Time.now }

    trait :accepted do
      accepted_at { 10.months.ago }
    end
  end
end
