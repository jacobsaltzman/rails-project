class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :condition, :image
end
