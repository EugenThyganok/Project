//Creating a javascript object for a each database table

exports.Client = function(id, email, name, clocksize, city, time) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.clocksize = clocksize;
    this.city = city;
    this.time = time;
}

exports.City = function(id, city) {
    this.id = id;
    this.city = city;
}

exports.Worker = function(id, rating, city, reverstime) {
    this.id = id;
    this.rating = rating;
    this.city = city;
    this.reverstime = reverstime;
}