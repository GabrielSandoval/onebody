class BoardSerializer < ActiveModel::Serializer
  attribute :email
  attribute :name
  attribute :width
  attribute :height
  attribute :num_mines
  attribute :locations
end
