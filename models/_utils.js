
const {STATUS} = require('../constants/contants');
const {ObjectId} = require('./_plugins');

class Utils{
	optionsSchemaCommon({collection}){
		return { _id: true, collection, versionKey: false };
	}

	fieldsCommon(){
		return {
			status: {type: String, enum: STATUS, default: 10, required: true,},
			created_date: {type: Date},
			updated_date: {type: Date},
			created_by: {type: ObjectId, ref: 'user', required: true},
			updated_by: {type: ObjectId, ref: 'user', required: true},
		}
	}
}

module.exports = new Utils();