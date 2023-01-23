class Instrument < ApplicationRecord

  validates :name, presence: true

  belongs_to :member
  has_many :loans
  has_many :members, through: :loans




end
