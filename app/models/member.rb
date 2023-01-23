class Member < ApplicationRecord
  has_many :instruments, dependent: :destroy
  has_many :loans, dependent: :destroy



  validates :username, uniqueness: true, presence: true
  validates :password, presence: true 

  has_secure_password
end
