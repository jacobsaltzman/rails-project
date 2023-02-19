class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :condition, :image, :description
  has_many :loans
  has_many :members, through: :loans
end
