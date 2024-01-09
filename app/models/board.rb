class Board < ApplicationRecord
  paginates_per 20

  MAX_ATTEMPTS = 1000

  def place_mines!
    raise ArgumentError if width == 0 || height == 0

    placements = []  # [[1,2]] | [[3,4]]

    num_mines.times do
      attempts = 0
      prev_count = placements.size

      while prev_count == placements.size
        raise StandardError, "Unable to place mines" if attempts > MAX_ATTEMPTS

        row = rand(height)
        col = rand(width)
        placements |= [[row,col]]

        attempts += 1
      end
    end

    locations = placements.map { |loc| loc.join(",") }.join("|") # r,c|r,c|r,c
    update(locations: locations)
  rescue StandardError, ArgumentError
    update(locations: nil)
  end
end
