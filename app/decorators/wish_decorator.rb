class WishDecorator < ApplicationDecorator
  delegate_all

  def attributes
    {
      title: title,
      description: description,
      link_to_show: link_to_show
    }
  end

  def link_to_show
    h.wish_url(object)
  end
end
