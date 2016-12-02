Users = new Mongo.Collection('Users');

Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var firstnameVar = event.target.firstname.value;
        var lastnameVar = event.target.lastname.value;
        var cityVar = event.target.city.value;
        var countryVar = event.target.country.value;
        var phoneVar = event.target.value;
        var emailVar = event.target.email.value;
        console.log("Form submitted.");
        Users.insert({
            firstname: firstnameVar,
            lastname: lastnameVar,
            city: cityVar,
            country: countryVar,
            phone: phoneVar,
            email: emailVar
        });
    }
});