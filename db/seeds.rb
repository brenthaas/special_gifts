# frozen_string_literal: true

# Users
user_abc = FactoryBot.create(:user, email: 'a@b.c')

# Wishes
FactoryBot.create_list(:wish, 3, wisher: user_abc)
