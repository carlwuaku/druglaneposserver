const mongoose = require('mongoose');

const activitiesSchema = mongoose.Schema({
    activity:{
        type:'String',
        //index:true
      },
      
      date:{
        type: 'Date',
        default: () => Date.now(),
        index:true
      },
});

module.exports = mongoose.model('Activities', activitiesSchema);