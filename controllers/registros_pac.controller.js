import { Registro_Pac } from "../models/registro_pac.js";

export const getRegistrosPac = (req, res) => {
    if(req.query.name){
        Registro_Pac.findOne({ where: { name: req.query.name } }).then(results => {
            res.send(results);
        });        
    }else{
        Registro_Pac.findAll().then(results => {
            res.send(results);
        });
    }
};

export const createRegistroPac = (req,res) => {
    Registro_Pac.create(req.body).then(_=>{
        res.send("Creado correctamente")
    });
}