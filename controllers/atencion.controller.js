import { Atencion } from "../models/atencion.js";


export const getregistrosatenciones = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const registrosatenciones = await Atencion.findAll();
        //console.log(projects)
        res.json(registrosatenciones);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}

// export const getregistroatencion = async (req, res) => {
//     try {
//         const {id} = req.params;
//         const registrop= await Registro_Atencion.findOne({
//             where: {
//                 id : id
//             }
//         })
//         if (!registrop) return res.status(404).json({message : 'El registro del atencion no existe'});

//         res.json(registrop);
//     } catch (error) {
//         return res.status(500).json({message : error.message});
//     }
    
// }

export const createregistroatencion = async (req, res) => {
    
    try {
        const {id,fecha,email,historial,diagnostico,receta,recomendaciones,puntuacion} = req.body;
        const newatencion= await Atencion.create({
            id:id,
            fecha:fecha,
            email:email,
            historial:historial,
            diagnostico:diagnostico,
            receta:receta,
            recomendaciones:recomendaciones,
            puntuacion:puntuacion
        })

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newatencion);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
    
}


export const getatencionatencion = async (req, res) => {
    try {
        const {id} = req.params;
        const atencion = await Atencion.findAll({
            where : {
                id : id
            }
        })
        
        res.json(atencion);
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    
}