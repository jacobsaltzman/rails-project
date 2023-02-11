puts "🌱 Seeding Instrument Library..."


 instrument_data = [
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Under Repairs",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Loaned Out",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Loaned Out",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Under Repairs",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Under Repairs",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Loaned Out",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Available",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   },
   {
     name: Faker::Music.instrument,
     condition: "Loaned Out",
     description: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
   }
 ]

  user_data = [
    {
      username: "Admin",
      password: "strongpassword",
      email: "admin@library.com"
    },
    {
      username: "Jacob",
      password: "1111",
      email: "railsdev@google.com"
    },
    {
      username: "Nikki",
      password: "2222",
      email: "2spheres@google.com"
    }
  ]

#  loan_data = [
#    {
#      instrument_id: 2,
#      member_id: 1,
#      returned: true,
#      experience: 'It was great'
#    },
#    {
#     instrument_id: 4,
#     member_id: 1,
#     returned: true,
#     experience: 'It was okay'
#   },
#    {
#      instrument_id: 1,
#      member_id: 2,
#      returned: true,
#      experience: 'So challenging!'
#    },
#    {
#     instrument_id: 4,
#     member_id: 2,
#     returned: true,
#     experience: 'So much fun!'
#   },
#   {
#     instrument_id: 7,
#     member_id: 2,
#     returned: true,
#     experience: 'Not for me...'
#   }
#  ]


 user_data.each do |attr|
   Member.create(attr)
 end

 instrument_data.each do |attr|
    instrument = Instrument.create(attr)
    instrument.image = Faker::LoremFlickr.image(size: "150x200", search_terms: [instrument.name])
    instrument.save
 end

 loan_data.each do |attr|
     Loan.create(attr)
 end

puts "✅ Done seeding!"
puts "#{Instrument.count} instruments created!"
puts "#{Member.count} users created!"
puts "#{Loan.count} loans created!"