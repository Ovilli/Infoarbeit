require 'sinatra'

# TASK: This code may crash for certain inputs
# Students' job: find inputs that break it and fix the code

post '/process' do
  input = params[:user_input]

  # TASK: This is intentionally unsafe
  # Students should find crashing inputs and handle them properly
  begin
    result = eval(input)  # <- This is dangerous!
    "Result: #{result}"
  rescue => e
    "Crash happened: #{e.message}"
  end
end

# Start the server: ruby app.rb
