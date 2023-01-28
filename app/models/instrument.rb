class Instrument < ApplicationRecord

  validates :name, presence: true

  has_many :loans
  has_many :members, through: :loans




end
