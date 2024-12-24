import ladiesRings from '../../expressStatic/BJ_files/json_files/Ladies_Rings_Complete_Data.json' assert {type: 'json'}
import mensRings from '../../expressStatic/BJ_files/json_files/Mens_Rings_Complete_Data.json' assert {type:'json'};

export const standardInventoryShow = (req, res) => {
    res.render('./inventory/standardInventory.ejs', {ladiesRings, mensRings});
}