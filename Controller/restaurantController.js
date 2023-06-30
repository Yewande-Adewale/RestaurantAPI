const restaurantModel = require('../Model/restaurantModel')

const create = async (req, res)=>{
        try{

            const menu = await restaurantModel.create(req.body)
            res.status(200).json({
                message: `the menu has been created`,
                data: menu
            })
        }catch(error){
            res.status(400).json(error.message)
        }
    }
    

const getAllMenu = async(req,res)=>{
    try{
       const branch = req.params
        const allBranchMenu = await restaurantModel.find()
         if(allBranchMenu){
             res.status(200).json({
                 message: "All menu created successfully",
                 data: allBranchMenu
             })
         }else{
             res.status(400).json({
                message: "menu not created"
            })
         }
     } catch (error){
             res.status(500).json({
            message: error.message
         })
     }
 }

 const getMenu=async(req,res)=>{
    try{
        const branch = req.params
        const menu = await restaurantModel.findOne(branch)
        res.status(200).json({
            message: " Here is the branch data",
            data:menu
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}



const updateMenu = async (req, res)=>{
    try {
        //const theProduct = await restaurantModel.findById(req.params.id)
      
 const updatedProduct = await restaurantModel.findByIdAndUpdate(req.params.id,req.body)
    
        // {
        //     "refMax.main":req.body.main,
        //     "citizenMeal.main":req.body.main,
        //     "chickWizz.main":req.body.main,

        // "refMax.sides":req.body.sides,
        // "citizenMeal.sides":req.body.sides,
        // "chickWizz.sides":req.body.sides,

        // "refMax.Drink":req.body.drinks,
        // "citizenMeal.Drink":req.body.drinks,
        // "chickWizz.Drink":req.body.drinks
        // } 
    
     res.status(200).json({
        message: "updated successfully",
        data: updatedProduct
     })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
    


const deleteMenu = async (req, res)=>{
    try {
        const deleted = await restaurantModel.findByIdAndDelete(req.params.id,req.body)
        res.status(200).json({
            message: "deleted successfully",
            //data: deleted
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    create,
    getAllMenu,
    getMenu,
    updateMenu,
    deleteMenu
}

