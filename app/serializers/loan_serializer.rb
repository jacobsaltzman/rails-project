class LoanSerializer < ActiveModel::Serializer
  attributes :id, :experience, :returned, :updated_at, :name, :instrumentname, :instrument_id, :created_at
  belongs_to :member, serializer: MemberSerializer

  def name
    object.member.username
  end

  def instrumentname
    object.instrument.name
  end

end
