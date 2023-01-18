class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :condition, :image, :description
  has_many :loans
end
