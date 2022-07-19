
import { paciente } from "../models/paciente.js";
import { Atencion } from "../models/atencion.js";


export const getregistrospacientes = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')

        const registrospacientes = await paciente.findAll();

        //console.log(projects)
        res.json(registrospacientes);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}


export const createpaciente = async (req, res) => {
    
    try {
        const {id,name,lastname,email,password,birthdate,phone} = req.body;
        const newPaciente= await paciente.create({
            id:id,
            lastname:lastname,
            email:email,
            password:password,
            birthdate:birthdate,
            phone:phone
        })

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newPaciente);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
    
}


export const getpacienteatencion = async (req, res) => {
    try {
        const {id} = req.params;
        const atencion = await atencion.findAll({
            where : {
                registro_paciente_id : id
            }
        })
        
        res.json(atencion);
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    
}