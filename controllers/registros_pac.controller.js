import { registropaciente } from "../models/registropaciente.js";
import { atencion } from "../models/atencion.js";

export const getregistrospacientes = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const registrospacientes = await registropaciente.findAll();
        //console.log(projects)
        res.json(registrospacientes);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}

// export const getregistropaciente = async (req, res) => {
//     try {
//         const {id} = req.params;
//         const registrop= await registropaciente.findOne({
//             where: {
//                 id : id
//             }
//         })
//         if (!registrop) return res.status(404).json({message : 'El registro del paciente no existe'});

//         res.json(registrop);
//     } catch (error) {
//         return res.status(500).json({message : error.message});
//     }
    
// }

export const createregistropaciente = async (req, res) => {
    
    try {
        const {id,name,lastname,email,password,birthdate,phone} = req.body;
        const newPaciente= await registropaciente.create({
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