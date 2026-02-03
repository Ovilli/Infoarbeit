# Ultra-Safe Ruby Crash Tester (File Input Version)
# Reads arithmetic expressions from input.txt and outputs results safely

INPUT_FILE = "input.txt"

unless File.exist?(INPUT_FILE)
  puts "File #{INPUT_FILE} not found!"
  exit
end

File.foreach(INPUT_FILE) do |line|
  input = line.chomp
  next if input.strip.empty? # skip empty lines

  puts "Input: #{input}"

  # Remove spaces for easier validation
  sanitized = input.delete(" ")

  # Only allow digits, parentheses, ., and arithmetic operators
  if sanitized =~ /\A[0-9+\-*/().]+\z/
    # Reject invalid operator sequences like ++, */ etc.
    if sanitized =~ /\A--?\d.*\z/ || sanitized !~ /[\+\-\*\/]{2,}/
      begin
        result = eval(input)
        # Handle division by zero
        if result == Float::INFINITY || result == -Float::INFINITY
          puts "Error: Division by zero!"
        elsif result.to_s == "NaN"
          puts "Error: Result is not a number (NaN)!"
        else
          puts "Result: #{result}"
        end
      rescue ZeroDivisionError
        puts "Error: Division by zero!"
      rescue SyntaxError, StandardError
        puts "Error: Invalid arithmetic expression!"
      end
    else
      puts "Invalid input! Consecutive operators are not allowed."
    end
  else
    puts "Invalid input! Only numbers, parentheses, and + - * / . are allowed."
  end
  puts "-" * 30 # separator between inputs
end
