class MemberSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :loans
  has_many :instruments
end
