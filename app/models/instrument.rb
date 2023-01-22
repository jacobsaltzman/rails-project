class Instrument < ApplicationRecord
  has_many :loans
  has_many :members, through: :loans

  belongs_to :member

  validates :name, presence: true

end
