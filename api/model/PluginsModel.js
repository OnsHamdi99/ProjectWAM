var mongoose = require('mongoose');  
var PluginSchema = new mongoose.Schema({  
  id: Number,
  identifier: String,
  name : String,
  vendor: String,
  description: String,
  version: String,
  apiVersion: String, 
  thumbnail : String, 
  keywords : [String] , 
  isInstrument : Boolean, 
  website : String ,
  hasAudioInput : Boolean, 
  hasAudioOutput : Boolean,
  hasMidiInput : Boolean, 
  hasMidiOutput : Boolean,

});
mongoose.model('Plugin', PluginSchema);

module.exports = mongoose.model('Plugin');