//let Assignment = require('../model/assignment');
// Include fs module
const fs = require('fs');
const path = require('path');

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

/*
// Récupérer un assignment par son id (GET)
function getAssignment(req, res){
    let assignmentId = req.params.id;

    Assignment.findOne({id: assignmentId}, (err, assignment) =>{
        if(err){res.send(err)}
        res.json(assignment);
    })
}

// Ajout d'un assignment (POST)
function postAssignment(req, res){
    let assignment = new Assignment();
    assignment.matiere = req.body.matiere;
    assignment.id = req.body.id;
    assignment.nom = req.body.nom;
    assignment.dateDeRendu = req.body.dateDeRendu;
    assignment.rendu = req.body.rendu;

    console.log("POST assignment reçu :");
    console.log(assignment)

    assignment.save( (err) => {
        if(err){
            res.send('cant post assignment ', err);
        }
        res.json({ message: `${assignment.nom} saved!`})
    })
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
    console.log("UPDATE recu assignment : ");
    console.log(req.body);
    Assignment.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, assignment) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }

      // console.log('updated ', assignment)
    });

}

// suppression d'un assignment (DELETE)
function deleteAssignment(req, res) {

    Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${assignment.nom} deleted`});
    })
}

*/

module.exports = { getPlugins };
