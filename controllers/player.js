const Player = require('../models/PlayerApi.js');

const playerController = {
  // this is an object where the keys are function names (which can be called in index.js) and the values are the functions themselves
  //= =====================
  // INDEX
  //= =====================
  // Create a function sends all Donuts to donuts/index.hbs view
  getAllPlayers: function (req,res) {
      return PlayerApi.find();
    // PlayerApi.find() // a Mongoose method for finding things (everything: all donuts)
    // // there is also .create(), .findById(), .findByIdAndUpdate(), and .findByIdAndRemove()
    //   .then(players => {
    //     res.send(players);
        // res.render("routes/index", {players});
        // whatever you find, call it donuts, so we can work with, like here, where we tell it to make donuts available to the index view, and then render that view
      // });
  },

//   //= =====================
//   // NEW
//   //= =====================
//   // Create a function that renders the new.hbs form
//   new: function (req,res) {
//     res.render("donuts/new");
//   },
//   // NEW's only job is to show the form!  It doesn't have an action, but the form does, i.e., the URL to what you want to create.

//   //= =====================
//   // SHOW
//   //= =====================
//   // Create a function that renders a single Donut's show page
//   show: function (req,res) {
//     Donut.findById(req.params.id)
//       .then(donut => {
//         res.render("donuts/show", {donut});
//       });
//   },
//   // req.params.id refers to the number after the slash

//   //= =====================
//   // CREATE
//   //= =====================
//   // Create a function that creates a new Donut
//   // and upon success redirects back to the index page "/"
//   create: function (req, res) {
//       Donut.create(req.body)
//         // .then(newDonut => {
//         //   res.redirect("donuts/index",{newDonut});
//           .then(() => res.redirect('/'))
//   },

//   //= =====================
//   // EDIT
//   //= =====================
//   // Create a function that renders the edit.hbs page and
//   // sends that a Donut's data to it
//   edit: function (req,res) {
//     // const donutId = req.params.id;
//     // const updatedDonut = req.body;
//     Donut.findById(req.params.id)
//       .then(donut => {
//         res.render("donuts/edit", {donut});
//         // the object donut is made available to the donuts/edit view (page)
//         // what's returned by findById() is an object, so the donut on line 65 is technically {donut: donut}, but when key and value are same, can just use {donut}; whatever it's called here is same name that should be used (in double braces) in view (.hbs) files, e.g. {{}}donut.name}}
//       });
//   },

//   //= =====================
//   // UPDATE
//   //= =====================
//   // Create a function that updates the Donut and
//   // redirects back to the SHOW PAGE (not index)
//   update: function (req,res) {
//     Donut.findByIdAndUpdate(req.params.id, req.body,{new:true})
//       .then(() => {
//         // res.redirect(`/${req.params.id}`)
//         res.redirect("/" + req.params.id);
//     });
//   },

//   //= =====================
//   // DELETE
//   //= =====================
//   // Create a function that deletes the Donut and
//   // redirects back to index page "/"
//   delete: function (req,res) {
//     Donut.findByIdAndRemove(req.params.id)
//       .then(() => {
//         res.redirect("/");
//       });
//   }
}

module.exports = playerController;