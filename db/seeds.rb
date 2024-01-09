# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
#

date_range = (1.year.ago.to_date..1.hour.ago.to_date).to_a

40.times do |i|
  board = Board.create(
    name: "Board #{i}",
    email: "user-#{i}@example.com",
    width: rand(30),
    height: rand(30),
    num_mines: rand(40),
  )

  board.place_mines!
end
