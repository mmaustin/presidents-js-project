# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


President.create(name: "Abraham Lincoln")
President.create(name: "Franklin Roosevelt")
President.create(name: "Lyndon Johnson")

Achievement.create([
    {title: "Emancipation Proclamation", year: 1863, president_id: 1},
    {title: "WPA", year: 1935, president_id: 2},
    {title: "Civil Rights Act", year: 1964, president_id: 3}
])