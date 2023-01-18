class Loan < ApplicationRecord
  belongs_to :instrument
  belongs_to :member
end
