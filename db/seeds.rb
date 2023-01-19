puts "🌱 Seeding Instrument Library..."

#replace with Faker
instrument_data = [
  {
    name: "Guitar",
    condition: "Jordan Peele",
    description: "Mystery/Thriller",
    image: "https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png"
  },
  {
    name: "Get Out",
    condition: "Jordan Peele",
    description: "Mystery/Thriller",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png"
  },
  {
    name: "Psycho",
    condition: "Alfred Hitchcock",
    description: "Mystery/Thriller",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/220px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg"

  },
  {
    name: "The Cabinet of Dr. Caligari",
    condition: "Robert Wiene",
    description: "Mystery/Thriller",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/The_Cabinet_of_Dr._Caligari_poster.jpg/220px-The_Cabinet_of_Dr._Caligari_poster.jpg"
  },
  {
    name: "Alien",
    condition: "Ridley Scott",
    description: "SciFi",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Alien_instrument_poster.jpg/220px-Alien_instrument_poster.jpg"
  },
  {
    name: "King Kong",
    condition: "Merian C. Cooper",
    description: "Monster",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/King_Kong_1933_Promotional_Image.png/280px-King_Kong_1933_Promotional_Image.png"
  },
  {
    name: "Dawn of the Dead",
    condition: "Zack Snyder",
    description: "SciFi",
    image: "https://upload.wikimedia.org/wikipedia/en/1/16/Dawn_of_the_Dead_2004_instrument.jpg"
  },
  {
    name: "The Omen",
    condition: "Richard Donner",
    description: "Paranormal",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Omen_ver4.jpg"
  },
  {
    name: "The Grudge",
    condition: "Takashi Shimizu",
    description: "Paranormal",
    image: "https://upload.wikimedia.org/wikipedia/en/9/91/The_Grudge_instrument.jpg"
  },
  {
    name: "The Frighteners",
    condition: "Peter Jackson",
    description: "Comedy",
    image: "https://upload.wikimedia.org/wikipedia/en/6/63/Frighteners_ver1.jpg"
  },
  {
    name: "The Blair Witch Project",
    condition: "Daniel Myrick",
    description: "FF",
    image: "https://upload.wikimedia.org/wikipedia/en/2/26/Blair_Witch_Project.jpg"
  },
  {
    name: "Hellraiser",
    condition: "Clive Barker",
    description: "Gore",
    image: "https://upload.wikimedia.org/wikipedia/en/4/40/Hellraiser-UK-Quad-poster.JPG"
  },
  {
    name: "Nope",
    condition: "Jordan Peele",
    description: "SciFi",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e6/Nope_%28film%29_poster.jpg"
  },
  {
    name: "Midsommar",
    condition: "Ari Aster",
    description: "Psychological",
    image: "https://upload.wikimedia.org/wikipedia/en/4/47/Midsommar_%282019_film_poster%29.png"
  },
  {
    name: "Friday the 13th",
    condition: "Sean Cunningham",
    description: "Slasher",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2c/Friday_the_13th_%281980%29_theatrical_poster.jpg"
  },
  {
    name: "Godzilla",
    condition: "Ishiro Honda",
    description: "Monster",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Gojira_1954_Japanese_poster.jpg"
  },
  {
    name: "Shaun of the Dead",
    condition: "Edgar Wright",
    description: "Comedy",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Shaun_of_the_Dead_film_poster.jpg"
  }
]

user_data = [
  {
    username: "Jacob",
    password: "1111",
    email: "railsdev@google.com",
  },
  {
    username: "Nikki",
    password: "2222",
    email: "2spheres@google.com",
  }
]

loan_data = [
  {
    instrument_id: 2,
    member_id: 1,
    start_date: DateTime.new(2009,9,1,17), #replace with Faker
    end_date: DateTime.new(2009,9,1,17), #replace with Faker
    status: ended
  },
  {
    instrument_id: 1,
    member_id: 2,
    start_date: DateTime.new(2009,9,1,17), #replace with Faker
    end_date: DateTime.new(2009,9,1,17), #replace with Faker
    status: ongoing
  }
]

instrument_data.each do |attr|
   Instrument.create(attr)
end

user_data.each do |attr|
    Member.create(attr)
end

loan_data.each do |attr|
    Loan.create(attr)
end

puts "✅ Done seeding!"
puts "#{Instrument.count} instruments created!"
puts "#{Member.count} users created!"
puts "#{Loan.count} loans created!"