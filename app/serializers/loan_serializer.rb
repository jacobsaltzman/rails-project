class LoanSerializer < ActiveModel::Serializer
  attributes :id, :experience, :returned, :loan_updated, :name, :instrumentname, :instrument_id, :loan_began
  belongs_to :member, serializer: MemberSerializer

  def name
    object.member.username
  end

  def instrumentname
    object.instrument.name
  end

  def loan_began
    object.created_at.strftime("%Y-%m-%d")
  end

  def loan_updated
    object.updated_at.strftime("%Y-%m-%d at %H:%M")
  end

end
