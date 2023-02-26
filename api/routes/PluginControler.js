//let Assignment = require('../model/assignment');
// Include fs module
const fs = require('fs');
const path = require('path');
let Plugin = require("../model/PluginsModel") ; 
function getPlugins(req, res) {
  console.log("getPlugins");
  let currentDir = process.cwd();
  let pluginsDir = currentDir + "/plugins/wimmics";
  let pluginsDirURL = "https://localhost:8080/…";
  let repository = {
    name: "WAP Repo from Faust IDE",
    root: pluginsDir,
    plugins: [],
  };

  //files = fs.readdirSync(pluginsDir);
  console.log("Building Repositiry.json...Reading " + pluginsDir + "...");

  
   fs.readdirSync(pluginsDir).forEach(name => {
       var filePath = path.join(pluginsDir, name);
       var stat = fs.statSync(filePath);

       if (stat.isFile()) {
           console.log("Ignoring file : " + name);
       } else if (stat.isDirectory()) {
            const descriptorPath = filePath + "/descriptor.json";

            if(fs.existsSync(descriptorPath)) {
                const descriptor = fs.readFileSync(descriptorPath, {encoding:'utf8', flag:'r'});
                repository.plugins.push(JSON.parse(descriptor));
            }  
     }
       
   });
 
  res.json(repository);
}

function getPlugin(req,res){
  let pluginID = req.params.id; 
  Plugin.findOne({id : pluginID}, (err, plugin) => {
    if(err){res.send(err)}
    res.json(plugin)
  })
}

function postPlugin (req, res) {
  let plugin = new Plugin() ; 
  plugin.id = req.body.id ; 
  plugin.identifier = req.body.identifier;
  plugin.name = req.body.name;
  plugin.vendor = req.body.vendor; 
  plugin.description = req.body.description; 
  plugin.version = req.body.version;
  plugin.apiVersion = req.body.apiVersion;
  plugin.thumbnail = req.body.thumbnail;
  plugin.keywords = req.body.keywords; 
  plugin.isInstrument = req.body.isInstrument; 
  plugin.website = req.body.website; 
  plugin.hasAudioInput = req.body.hasAudioInput;
  plugin.hasAudioOutput = req.body.hasAudioOutput;
  plugin.hasMidiInput = req.body.hasMidiInput; 
  plugin.hasMidiOutput = res.body.hasMidiOutput; 
   
  console.log="Post Plugin received : "
  console.log(plugin) ;

  plugin.save((err)=> {
    if(err){
      res.send("Can't post plugin : ", err)
    }
    res.json ({message : "${plugin.name} saved! "})
  })

} 

function deletePlugin(req, res) {

  Plugin.findByIdAndRemove(req.params.id, (err, plugin) => {
      if (err) {
          res.send(err);
      }
      res.json({message: `${pluginname.nom} deleted`});
  })
}

function updatePlugin(req,res){ 
  console.log("Update on plugin : ");
  console.log(req.body) ;
  Pluggin.findByIdAndUpdate(res.body._id, req.body, {new :true}, (err, plugin) => {
    if (err) {
      console.log(err);
      res.send(err); 
    }
    else {
      res.json({message : "${plugin.name} updated"});
    }
  })
}

module.exports = { getPlugins, getPlugin, deletePlugin, updatePlugin, postPlugin };
