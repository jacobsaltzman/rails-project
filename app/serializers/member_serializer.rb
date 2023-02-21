class MemberSerializer < ActiveModel::Serializer
  attributes :id, :username, :creationDate
  has_many :loans

  def creationDate
    object.created_at.strftime("%Y-%m-%d")
  end

end
