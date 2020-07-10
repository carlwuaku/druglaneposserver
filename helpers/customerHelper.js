
const Model = require('../models/customerModel');
exports.prep_data = function (data) {
    let keys = ["first_name", "last_name", "sex", "picture",
     "email", "phone", "nationality", "place_of_work", "notes", "thumbnail"]
    var returner = {};

    
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if(data[key] != undefined){
            returner[key] = data[key];
        }
        
    }

    return returner;
}



exports.search = function (param, limit, offset) {
    let final_query= []
    let fields = ["first_name", "last_name",  "email", "phone", "nationality", "place_of_work"];
    //separate the word by commas to get an array of words
    var split = param.split(",");
    //for each of the words in the array,
    for (var i = 0; i < split.length; i++) {
        //the and_object for this word. all the or queries will be put into this.
        /**
         * the or queries will come from each word from when we split by the space
         * .and([
      { $or: [{a: 1}, {b: 1}] },
      { $or: [{c: 1}, {d: 1}] }
        ])
         */
        var and_query = []
        let word = split[i];
        //let word = param;
        //separate by spaces
        let split_param = word.split(" ");
        //then for each of those items split by spaces,
        //generate the query
        for (var j = 0; j < split_param.length; j++) {
            var word_query =[];
            var space_word = split_param[j];
            //loop through fields and generate query for each field with the current word
            for(var k = 0; k < fields.length; k++){
                var f = fields[k];
                var obj = {}
                obj[f] = { $regex: '.*' + space_word + '.*', $options: 'i' } 
                //generate an object query for this field and the space_word
                //and push it into the word query
                /**
                 * so something like this {name: space_word}
                 */
                word_query.push(obj)
                //word_query = [{name: space_word}, {email: space_word}]
            }//end fields loop


            and_query.push({$or : word_query})
            /**
             * and_query = [
             * {$or: [{name: space_word1}, {email: space_word1}]}, 
             * {$or: [{name: space_word2}, {email: space_word2}]}
             * ]

             */
        }//end split_param loop for each word
        //then push the generated end_query for each word into the final query

        final_query.push({$and: and_query})
        /**
         * 
         * final_query = [
         * {$and: [
             * {$or: [{name: split_param 1 word 1}, {email: split_param 1 word 1}]}, 
             * {$or: [{name: split_param 1 word 2}, {email: split_param 1 word 2}]}
             * ]
            },
            {$and: [
             * {$or: [{name: split_param 2 word 1}, {email: split_param 2 word 1}]}, 
             * {$or: [{name: split_param 2 word 2}, {email: split_param 2 word 2}]}
             * ]
            }
             * 
         * ]
         */

    }
    
    return final_query;
}
