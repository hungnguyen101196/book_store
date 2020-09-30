const BaseController = require('./base');
const categoryService = require('../services/category');

class CategoryController extends BaseController {
    constructor() {
        super();
    }

    async view(req, res) {
        try {
            return super.renderPageAdmin(req, res, { path: 'category/index' });
        } catch (error) {
            return super.resJsonError(res, error, 'category');
        }
    }

    async create(req, res) {
        try {
            const result = await categoryService.create(req.body);
            return super.resJsonSuccess(res, result);
        } catch (error) {
            return super.resJsonError(res, error, 'category');
        }
    }

    async list(req, res) {
        try {
            const result = await categoryService.list(req.body);
            return super.resJsonSuccess(res, result);
        } catch (error) {
            return super.resJsonError(res, error, 'category');
        }
    }

    async update(req, res) {
        try {
            const result = await categoryService.updateOne(req.body);
            return super.resJsonSuccess(res, result);
        } catch (error) {
            return super.resJsonError(res, error, 'category');
        }
    }
}
module.exports = new CategoryController();
