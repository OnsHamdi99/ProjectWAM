var mongoose = require('mongoose');  
var PluginSchema = new mongoose.Schema({  
  id: Number,
  identifier: String,
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
  hasMiniInput : Boolean, 
  hasMidiOutput : Boolean,

});
mongoose.model('Plugin', PluginSchema);

module.exports = mongoose.model('Plugin');