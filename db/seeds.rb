# frozen_string_literal: true

# Users
user_abc = FactoryBot.create(:user, email: 'a@b.c')
friend = FactoryBot.create(:user, email: 'friend@b.c')
requested_friend = FactoryBot.create(:user, email: 'requested@b.c')

# Wishes
FactoryBot.create_list(:wish, 3, wisher: user_abc)
FactoryBot.create_list(:wish, 2, wisher: friend)

FactoryBot.create(:friend_request, :accepted, user: user_abc, requested_friend: friend)
FactoryBot.create(:friend_request, user: user_abc, requested_friend: requested_friend)
