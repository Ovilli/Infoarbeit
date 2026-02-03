# TASK: This code may crash for certain inputs if not handled properly
# Students' job: read expressions from a file (input.txt) and ensure the program
# safely handles all inputs without crashing

INPUT_FILE = "input.txt"

# TASK: The file may contain unsafe inputs like letters, invalid operators, or division by zero
# Students should update the code so that all expressions are handled safely

unless File.exist?(INPUT_FILE)
  puts "File #{INPUT_FILE} not found!"
  exit
end

File.foreach(INPUT_FILE) do |line|
  input = line.chomp
  next if input.strip.empty?

  puts "Input: #{input}"

  # TASK: The following eval is intentionally unsafe
  # Students should sanitize input and handle errors
  begin
    result = eval(input)  # <- This is dangerous!
    puts "Result: #{result}"
  rescue => e
    puts "Crash happened: #{e.message}"
  end

  puts "-" * 30
end
