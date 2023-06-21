const plantSchema= require("../models/plant.js")

const plantsData = [
 {
        commonName: 'Orquídea',
        scientificName: 'Orchidaceae',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_orquidea.jpg',
        region: 'América del Sur'
    },
    {
        commonName: 'Cactus de San Pedro',
        scientificName: 'Echinopsis pachanoi',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_cactus.jpg',
        region: 'América del Sur'
    },
    {
        commonName: 'Helecho de Boston',
        scientificName: 'Nephrolepis exaltata',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_helecho.jpg',
        region: 'América Central'
    },
    {
        commonName: 'Lirio de la paz',
        scientificName: 'Spathiphyllum wallisii',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_lirio.jpg',
        region: 'América del Sur'
    },
    {
        commonName: 'Aloe vera',
        scientificName: 'Aloe vera',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_aloe.jpg',
        region: 'África'
    },
    {
        commonName: 'Hibisco',
        scientificName: 'Hibiscus rosa-sinensis',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_hibisco.jpg',
        region: 'Asia'
    },
    {
        commonName: 'Suculenta de jade',
        scientificName: 'Crassula ovata',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_suculenta.jpg',
        region: 'África'
    },
    {
        commonName: 'Begonia',
        scientificName: 'Begonia',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_begonia.jpg',
        region: 'América del Sur'
    },
    {
        commonName: 'Bambú',
        scientificName: 'Bambusoideae',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_bambu.jpg',
        region: 'Asia'
    },
    {
        commonName: 'Rosa',
        scientificName: 'Rosa',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_rosa.jpg',
        region: 'Europa'
    },
    {
        commonName: 'Lavanda',
        scientificName: 'Lavandula',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_lavanda.jpg',
        region: 'Mediterráneo'
    },
    {
        commonName: 'Geranio',
        scientificName: 'Pelargonium',
        stateOfConservationue: 'No se encuentra en peligro',
        img: 'imagen_geranio.jpg',
        region: 'África'
    },
    {
        commonName: 'Crisantemo',
        scientificName: 'Chrysanthemum',
        stateOfConservationueue: 'No se encuentra en peligro',
        img: 'imagen_crisantemo.jpg',
        region: 'Asia'
    }
]

const createPlants = async (req,res) => {
    try {
        const plants = plantsData?.map(async plant => {
            const {commonName,scientificName, stateOfConservationue, img, region } = plant
            const plantDB = await plantSchema({commonName,scientificName, stateOfConservationue, img, region});
            const createplant = await plantDB.save()
            return createplant         
        })

        return res.status(200).json(plants)
        
    } catch (error) {
        return res.status(404).json({error:error})
    }
}

const getPlants= async (req,res)=>{
    try {
        const {commonName} = req.query

        if(commonName){
            const plant = await pokeSchema.find();
            const plantFilter= plant.filter(e => e.commonName.toLowerCase().includes(commonName.toLowerCase()))
            if(poke){
                return res.status(200).json(plantFilter)
            }else{
                return res.status(404).json({error: "Nombre invalido"})
            }
            
        }else{
            const Plants = await plantSchema.find()
            return res.status(200).json(Plants)
        }
    }
    catch(error) {
        return res.status(404).json({error:error.message})
    }
}

const postPlants = async(req,res) =>{
    try {
        const {commonName,scientificName, stateOfConservationue, img, region}= req.body;
        if( !commonName ||!scientificName || !stateOfConservationue || !img ||!region ){
            return res.status(404).json({error: "No hay suficientes datos"})
        }
        const plant = await plantSchema({commonName,scientificName, stateOfConservationue, img, region});
        const createplant = await plant.save()

        return res.status(200).json(createplant)
        
    } catch (error) {
        return res.status(404).json({error:error})
    }
}

const putPlants = async (req,res) => {
    try {
        const {id} = req.query
        const {commonName,scientificName, stateOfConservationue, img, region}= req.body;
        if( !commonName ||!scientificName || !stateOfConservationue || !img ||!region ){
            return res.status(404).json({error: "No hay suficientes datos"})
        }
        const plant = await plantSchema.findByIdAndUpdate(id,{commonName,scientificName, stateOfConservationue, img, region})
        return res.status(200).json(plant)

    } catch (error) {
        return res.status(404).json({error:error})
    }
}

const deletePlants=async(req,res)=>{
    const { id } = req.params;

    try {
        if(!id)return res.send("No ID was sent.")

        await plantSchema.findByIdAndDelete(id);
        return res.status(200).json({success:"Your plant was deleted successfully."})
    } catch (error) {
        return res.status(404).json({error:error.message})
    }
}

module.exports={
    createPlants,
    getPlants,
    postPlants,
    putPlants,
    deletePlants
}