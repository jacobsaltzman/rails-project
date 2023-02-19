class MemberSerializer < ActiveModel::Serializer
  attributes :id, :username, :created_at
  has_many :loans
end
