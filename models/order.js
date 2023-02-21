const mongoose = require('mongoose');

const Scheema = mongoose.Schema;

const orderScheema = new Scheema({
    products : [
        {
            product: { type : Object, required : true},
            quantity : {type : Number, required : true}
        }
    ],
    user :  {
        name : {
            type : String,
            required : true,
        },
        userId : {
            type : Scheema.Types.ObjectId,
            required : true,
            ref : 'User'
        }
    }
})

module.exports = mongoose.model('Order' , orderScheema);


