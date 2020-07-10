const mongoose = require('mongoose');
//this will just be used by admins in programming. users will make a copy of this in their
//roles when they created roles and add permissions. their permissions will not reference to this table.
//it'll be more like a store where they pick from for their use
const permissionSchema = mongoose.Schema({
    name: {
        type: 'string',
        //index:true
    },
    description: {
        type: 'string',
        //index:true
    }
});

module.exports = mongoose.model('Permissions', permissionSchema);