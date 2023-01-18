class Instrument < ApplicationRecord
  has_many :loans
  has_many :members, through: :loans

  validates :name, presence: true

end
