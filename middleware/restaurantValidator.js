Validator = require('fastest-validator')

const validator = new Validator();

const restaurantSchema = {
    refMax: {
        type: 'object',
        min: 3,
        max: 20
    },
citizenMeal: {
        type: 'object',
        min: 2,
        max: 30
    },
    chickWizz: {
        type: 'object',
        min: 1,
        max: 15
    },
    
};

module.exports = {
    validator,
    restaurantSchema
}