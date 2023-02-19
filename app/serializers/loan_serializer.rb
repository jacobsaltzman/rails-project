class LoanSerializer < ActiveModel::Serializer
  attributes :id, :experience, :returned, :updated_at, :name
  belongs_to :member, serializer: MemberSerializer

  def name
    object.member.username
  end
end
