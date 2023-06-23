const plantSchema= require("../models/plant.js")

const getPlants= async (req,res)=>{
    try {
        const {commonName} = req.query

        if(commonName){
            const plant = await plantSchema.find();
            const plantFilter= plant.filter(e => e.commonName.toLowerCase().includes(commonName.toLowerCase()))
            if(plant){
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
    getPlants,
    postPlants,
    putPlants,
    deletePlants
}