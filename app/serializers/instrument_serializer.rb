class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :condition, :image
  has_many :loans
end
