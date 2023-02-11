class LoanSerializer < ActiveModel::Serializer
  attributes :id, :member_id, :instrument_id, :experience, :returned
  belongs_to :member
end
