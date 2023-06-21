const pokeSchema= require("../models/plant.js")

const plantsData = [
    {
        commonName : '',
        scientificName : '',
        stateOfConservationue : '',
        img : '',
        region: ''
    },
    {
        commonName : '',
        scientificName : '',
        stateOfConservationue : '',
        img : '',
        region: ''
    }
]

const createPlants = async (req,res) => {
    try {
        const {name,vida,ataque,defensa,velocidad,altura,peso, img, types}= req.body;
        if( !name ||!vida || !ataque || !defensa ||!velocidad ||!altura ||!peso ||!img ||!types){
            return res.status(404).json({error: "No hay suficientes datos"})
        }
        let id=Math.floor((Math.random() * (2000000000 - 1000 + 1)) + 1000)
        const plant = await pokeSchema({id,name,vida,ataque,defensa,velocidad,altura,peso,img,types});
        const createplant = await plant.save()

        return res.status(200).json(createplant)
        
    } catch (error) {
        return res.status(404).json({error:error})
    }
}

const getPlants= async (req,res)=>{
    try {
        const {name} = req.query

        if(name){
            const plant = await pokeSchema.find();
            const poke= plant.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            if(poke){
                return res.status(200).json(poke)
            }else{
                return res.status(404).json({error: "Nombre invalido"})
            }
            
        }else{
            const Plants = await pokeSchema.find()
            return res.status(200).json(Plants)
        }
    }
    catch(error) {
        return res.status(404).json({error:error.message})
    }
}

const getPlantsDetail = async(req,res) =>{
    try {
        const {id}= req.params;
        if(!id){
            return res.status(404).json({error: "No hay id"})
        }
        const plant = await pokeSchema.find({ _id: id });
        return res.status(200).json(plant)
    } catch (error) {
        return res.status(404).json({error:error})
    }
}

const postPlants = async(req,res) =>{
    try {
        const {name,vida,ataque,defensa,velocidad,altura,peso, img, types}= req.body;
        if( !name ||!vida || !ataque || !defensa ||!velocidad ||!altura ||!peso ||!img ||!types){
            return res.status(404).json({error: "No hay suficientes datos"})
        }
        let id=Math.floor((Math.random() * (2000000000 - 1000 + 1)) + 1000)
        const plant = await pokeSchema({id,name,vida,ataque,defensa,velocidad,altura,peso,img,types});
        const createplant = await plant.save()

        return res.status(200).json(createplant)
        
    } catch (error) {
        return res.status(404).json({error:error})
    }
}

const deletePlants=async(req,res)=>{
    const { id } = req.params;

    try {
        if(!id)return res.send("No ID was sent.")

        await pokeSchema.findByIdAndDelete(id, function (err, plant) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted : ", plant); 
            }
        });
        return res.status(200).json({success:"Your plant was deleted successfully."})
    } catch (error) {
        return res.status(404).json({error:error.message})
    }
}

module.exports={
    getPlants,
    getPlantsDetail,
    postPlants,
    deletePlants
}