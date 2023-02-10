class Member < ApplicationRecord
  has_many :loans
  has_many :instruments, through: :loans



  validates :username, uniqueness: true, presence: true
  validates :password, presence: true 

  has_secure_password
end
