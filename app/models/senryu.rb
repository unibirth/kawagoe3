class Senryu < ActiveRecord::Base
  has_many :likes
  validates :name, presence: true
  validates :age, presence: true
  validates :theme, presence: true
  validates :senryu_top, presence: true
  validates :senryu_middle, presence: true
  validates :senryu_bottom, presence: true
end
