class LoanSerializer < ActiveModel::Serializer
  attributes :id, :member_id, :instrument_id, :experience, :returned, :updated_at
  belongs_to :member
end
