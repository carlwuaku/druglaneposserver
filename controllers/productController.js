
const express = require('express');
const router = express.Router();
const log = require('electron-log');
const service = require('../services/products_service')



const Helper = require('../helpers/productHelper.js');
const helper = new Helper();


router.get('/getList', async (req, res) => {
    try {
		let data = await service.get_list_function(req.query);
		res.json(data);
    } catch (error) {
        // console.log(error)
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }

});

router.get('/getProductsWithStock', async (req, res) => {
   try {
        let data = await service.get_products_with_stock_function(req.query);
		res.json(data);
        } catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }

});

router.get('/getUpdatedProducts', async (req, res) => {
    
    try {
        let data = await service.getUpdatedProducts(req.query);
		res.json(data);
} catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }
});

router.get('/search', async (req, res) => {
    
    try {
        let data = await service.search_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getRelatedProducts', async (req, res) => {
    
    try {
        let data = await service.get_related_products(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getProductBatches', async (req, res) => {
    try {
        let data = await service.get_product_batches_function(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error);
        res.json({ status: '-1', data: null });
    }

});



router.post('/saveBranchDetails', async (req, res) => {
    try {

        let data = await service.save_branch_details_function(req.body);
		res.json(data);
    
    } catch (error) {
        log.error(error);
        await helper.closeConnection();
        // console.log(error)
        res.json({ status: '-1', data: null })
    }





});



router.post('/massEdit', async (req, res) => {
    try {
    
        let data = await service.mass_edit_function(req.body);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        res.json({ status: '-1' })
    }

});


router.post('/delete', async (req, res) => {
    

    try {
        let data = await service.delete_function(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        res.json({ status: '-1' })
    }

});

router.post('/erase', async (req, res) => {
    

    try {
        let data = await service.erase_function(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1' })
    }

});

router.post('/softDelete', async (req, res) => {


    try {
        let data = await service.soft_delete_function(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        res.json({ status: '-1' })
    }

});

router.post('/restore', async (req, res) => {


    try {
        let data = await service.restore_function(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        res.json({ status: '-1' })
    }

});

router.get('/findById', async (req, res) => {
    
    try {
        let data = await service.find_by_id_function(req.query);
		res.json(data);


    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }
});

router.get('/getStock', async (req, res) => {
    try {
        let data = await service.get_stock_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1' })
    }
});

router.get('/getActiveIngredients', async (req, res) => {
    try {
        let data = await service.get_active_ingredients_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: [] })
    }
});


router.get('/getCategoryCounts', async (req, res) => {
    try {
        let data = await service.get_category_counts_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1' })
    }
});

router.get('/createStockAdjustmentSession', async (req, res) => {
    try {
        let data = await service.create_stock_adjustmentSession_function(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1' })
    }
});


///get the code that's still open. if there's none, create one
router.get('/getLatestSession', async (req, res) => {
    try {
        let data = await service.get_latest_session_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1' })
    }
});

router.post('/saveStockAdjustment', async (req, res) => {
    
    try {
        let data = await service.save_stock_adjustment_function(req.body);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        // console.log(error);
        res.json({ status: '-1' })
    }
});

router.post('/saveStockAdjustmentToPending', async (req, res) => {
    try {
        let data = await service.save_stock_adjustment_to_pending_function(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        
        res.json({ status: '-1' })
    }
});



router.post('/saveSingleStockAdjustment', async (req, res) => {
    try {
        let data = await service.save_single_stock_adjustment_function(req.body);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // stockHelper.connection.run("ROLL BACK");
        log.error(error);
        res.json({ status: '-1' })
    }

});

router.post('/savePendingSingleStockAdjustment', async (req, res) => {
    try {
        let data = await service.save_pending_single_stock_adjustment_function(req.body);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // stockHelper.connection.run("ROLL BACK");
        //console.l.log(error)
        res.json({ status: '-1' })
    }

});

///get the quantity if any previously entered for an item
router.get('/getPendingStockQuantity', async (req, res) => {
    try {
        let data = await service.get_pending_stock_quantity_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error);
        res.json({ status: '-1' })
    }
});


router.get('/getStockAdjustmentSessions', async (req, res) => {
    
    try {
        let data = await service.save_branch_details_function(req.query);
		res.json(data);

    } catch (error) {
        log.error(error);
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }

});

router.get('/getPendingStockAdjustmentSessions', async (req, res) => {
    
    try {
        let data = await service.get_pending_stock_adjustment_sessions(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getStockAdjustmentsBetweenDates', async (req, res) => {
    try {
        let data = await service.get_stock_adjustments_between_dates_function(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockAdjustmentsByCode', async (req, res) => {
    try {
        let data = await service.get_stock_adjustments_by_code_function(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getPendingStockAdjustmentsByCode', async (req, res) => {
    try {
        let data = await service.get_pending_stock_adjustments_by_code_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        res.json({ status: '-1', data: null })
    }

});




router.get('/getStockOutCount', async (req, res) => {
    try {
        let data = await service.get_stock_out_count_function(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/hasStockOut', async (req, res) => {
    try {
        let data = await service.has_stock_out_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockOutList', async (req, res) => {
    try {
        let data = await service.get_stock_out_list_function(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockNearMinCount', async (req, res) => {
    try {
        let data = await service.get_stock_near_min_count_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/hasStockNearMin', async (req, res) => {
    try {
        let data = await service.has_stock_near_min_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockNearMinList', async (req, res) => {
    try {
        let data = await service.get_stock_near_min_list_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockNearMaxCount', async (req, res) => {
    try {
        let data = await service.get_stock_near_max_count_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/hasStockNearMax', async (req, res) => {
    try {
        let data = await service.has_stock_near_max_function(req.query);
		res.json(data);
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockNearMaxList', async (req, res) => {
    try {
        let data = await service.get_stock_near_max_list_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getStockChanges', async (req, res) => {
    try {
        let data = await service.get_stock_changes_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});




router.get('/getExpiryCount', async (req, res) => {
    try {
        let data = await service.get_expiry_count_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/hasExpiry', async (req, res) => {
    try {
        let data = await service.has_expiry_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getExpiryList', async (req, res) => {
    try {
        let data = await service.get_expiry_list_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockValueList', async (req, res) => {
    try {
        let data = await service.get_stock_value_list_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getExpiredCount', async (req, res) => {
    try {
        let data = await service.get_expired_count_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/hasExpired', async (req, res) => {
    try {
        let data = await service.has_expired_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

router.get('/getExpiredList', async (req, res) => {
    try {
        let data = await service.get_expired_list_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getCategories', async (req, res) => {

    try {
        let data = await service.get_categories_function(req.query);
		res.json(data);

    } catch (error) {
        log.error(error);
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }


});

router.get('/getFunctionalGroups', async (req, res) => {
    try {
        let data = await service.get_functional_groups_function(req.query);
		res.json(data);

    } catch (error) {
        //console.l.log(error)
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }


});

router.get('/getStockValues', async (req, res) => {

    try {
        let data = await service.get_stock_values_function(req.query);
		res.json(data);
} catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }


});

router.get('/refreshAllProducts', async (req, res) => {
    var msg = "";
    try {
        let objects = await helper.getAll(helper.table_name);
        for (var i = 0; i < objects.length; i++) {
            let stock = await helper.calculateCurrentStock(objects[i].id);
            await helper.updateField('current_stock', stock, ` id = ${objects[i].id}`, helper.table_name);
            msg += `<p>${objects[i].name} updated to ${stock}</p>`
        }
        // res.json({ status: '1', data: arr })
        // res.redirect('/?message=Products Refreshed Successfully')
        res.send(msg)
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }


});



/**
 * merge multiple items into 1, combining all their records in sales, 
 * purchases, stock adjustment, transfers
 */
router.post('/merge', async (req, res) => {
    try {
        let data = await service.merge_function(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        console.log(error);
        res.json({ status: '-1', data: null })
    }
});




router.post('/upload', (req, res, next) => {
    try {
        var file = req.files.uploadfile
        var xlsx = require('xlsx');
        var workbook = xlsx.read(file.data);
        var sheet_name_list = workbook.SheetNames;
        // var csv = xlsx.utils.sheet_to_csv(workbook.Sheets[sheet_name_list[0]]);
        var arr = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
        var mother_array = []; //this will contain the sets of 100 arrays
        for (var i = 0; i < arr.length; i++) {
            var insert_array = []
            //convert each line to an array of items, by the commas
            var obj_array = arr[i];
            ////console.l.log(obj_array);
            var id = obj_array.id;
            var name = obj_array.name;
            var price = obj_array.price;
            var cost_price = obj_array.cost_price == undefined ? 0 : obj_array.cost_price;
            var category = obj_array.category == undefined ? "Miscellaneous" : obj_array.category;

            var expiry = "";
            if (obj_array.expiry == undefined) {
                expiry = "1970-01-01";
            } else {
                let unix = Date.parse(obj_array.expiry);
                let mill = unix * 1000;
                const dateObject = new Date(unix)

                expiry = helper.formatDate(dateObject)
            }
            var expected = obj_array.expected == undefined ? 0 : obj_array.expected;
            var counted = obj_array.counted == undefined ? 0 : obj_array.counted;
            var shelf = obj_array.shelf == undefined ? "" : obj_array.shelf;
            var unit = obj_array.unit == undefined ? "" : obj_array.unit;
            var functional_group = obj_array.functional_group == undefined ? "" : obj_array.functional_group;
            var markup = obj_array.markup == 1.33 ? "" : obj_array.markup;
            if (name != undefined && name != null && name != "") {
                mother_array.push({
                    id: id,
                    name: name,
                    price: price,
                    cost_price: cost_price,
                    category: category,
                    expiry: expiry,
                    quantity: counted,
                    stock: expected,
                    difference: counted - expected,
                    shelf: shelf,
                    unit: unit,
                    markup: markup,
                    functional_group: functional_group
                })
            }



        }//end for


        res.json({ status: '1', data: mother_array })
    } catch (error) {
        console.log(error);
        res.json({ status: '-1' })
    }



});

//add/remove an active ingredient
//get all active ingredients
router.get('/searchActiveIngredients', async (req, res) => {
    
    try {
        let data = await service.search_active_ingredients_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/addItemActiveIngredient', async (req, res) => {
    
    try {
        let data = await service.add_item_active_ingredient_function(req.body);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1' })
    }

});

router.get('/getChangedStock', async (req, res) => {
    try {
        let data = await service.get_changed_stock_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1' })
    }

});


router.post('/saveStockAdjustmentUpdatedQuantities', async (req, res) => {
    try {
        let data = await service.save_stock_adjustment_updated_quantities_function(req.body);
		res.json(data);

    } catch (error) {
        log.error(error);
        await helper.closeConnection();
        
        res.json({ status: '-1' })
    }
});


router.get('/getProductConsumption', async (req, res) => {
    

    try {
        let data = await service.get_product_consumption_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});




router.get('/getDuplicateCount', async (req, res) => {
    try {
        let data = await service.get_duplicate_count_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getDuplicateList', async (req, res) => {
    try {
        let data = await service.get_duplicate_list_function(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/mergeDuplicates', async (req, res) => {
    try {
        let data = await service.merge_duplicates_function(req.body);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        res.json({ status: '-1', data: null })
    }

});


//export the whole thingy
module.exports = router;