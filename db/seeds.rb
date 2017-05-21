puts "Emptying database"
Champion.destroy_all

puts "Fetching champion data"
champion_json = HTTParty.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
portrait_path = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'

puts "Building champion database"
if champion_json['type'] == 'champion'
  champion_json['data'].each do |row|
    champ = row[1]
    c = Champion.new
    c.name = champ["name"]
    c.portrait = portrait_path + champ['id'] + '.png'
    c.save
  end
end

puts "Seeding complete"
