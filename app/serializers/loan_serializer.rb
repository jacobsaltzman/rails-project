class LoanSerializer < ActiveModel::Serializer
  attributes :id, :member_id, :instrument_id, :start_date, :end_date, :status
  belongs_to :member
end
