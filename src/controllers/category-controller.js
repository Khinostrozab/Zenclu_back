import httpError from 'http-errors';
import CategoryService from '../services/category-service';

class CategoryController {
  static addTodo = async ({ body }, res, next) => {
    const [error, category] = await CategoryService.addCategory(body);
    if (error) return next(httpError.InternalServerError());
    return res.json(category);
  };

  static findAllCategories = async (req, res, next) => {
    const [error, categories] = await CategoryService.findAllCategories();
    if (error) return next(httpError.InternalServerError());
    return res.json(categories);
  };

  static findCategoryById = async ({ params }, res, next) => {
    const [error, category] = await CategoryService.findCategoryById(params.id);
    if (error || !category) return next(this.setNotFoundError(params.id));
    return res.json(category);
  };

  static updateCategoryById = async ({ body, params }, res, next) => {
    const [error, category] = await CategoryService.updateCategoryById(
      params.id,
      body
    );
    if (error) return next(this.setNotFoundError(params.id));
    return res.json(category);
  };

  static deleteCategoryById = async ({ params }, res, next) => {
    const [error, category] = await CategoryService.deleteCategoryById(
      params.id
    );
    if (error) return next(this.setNotFoundError(params.id));
    return res.json(category);
  };

  static setNotFoundError = (id) =>
    httpError.NotFound(`resource with id ${id} not found`);
}

export default CategoryController;
