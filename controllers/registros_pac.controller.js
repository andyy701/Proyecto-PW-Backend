import { Registro_Pac } from "../models/registro_pac.js";

export const getRegistrosPac = async (req, res) => {

    try {
        const RegistrosPac = await Registro_Pac.findAll();
        //console.log(projects)
        res.json(RegistrosPac);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}

export const createProject = async (req, res) => {
    
    try {
        const {correo, contraseña, nombre,
            apellido,dni,fecha_nacimiento,
            telefono} = req.body;
        const newRegistroPac= await Registro_Pac.create({
            correo: correo,
            contraseña:contraseña,
            nombre:nombre,
            apellido:apellido,
            dni:dni,
            fecha_nacimiento:fecha_nacimiento,
            telefono:telefono
        })

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newProject);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
    
}

export const createRegistroPac = (req,res) => {
    Registro_Pac.create(req.body).then(_=>{
        res.send("Creado correctamente")
    });
}