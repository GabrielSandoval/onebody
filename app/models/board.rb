class Board < ApplicationRecord
  paginates_per 20

  MAX_ATTEMPTS = 1000

  def self.search(query)
    results = all.order("created_at desc, name")
    return results if query.blank?

    results.where("name LIKE ?", "%#{query}%")
  end

  def place_mines!
    raise ArgumentError if width.zero? || height.zero?

    placements = [] # [[1,2]] | [[3,4]]

    num_mines.times do
      attempts = 0
      prev_count = placements.size

      while prev_count == placements.size
        raise ArgumentError, "Unable to place mines" if attempts > MAX_ATTEMPTS

        row = rand(height)
        col = rand(width)
        placements |= [[row, col]]

        attempts += 1
      end
    end

    locations = placements.map { |loc| loc.join(",") }.join("|") # r,c|r,c|r,c
    update(locations:)
  rescue ArgumentError
    update(locations: nil)
  end
end
