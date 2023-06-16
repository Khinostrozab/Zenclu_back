import Category from '../models/entity/category';
import { promisseHandler } from '../utils/promisse-handler';

class CategoryService {
  static addCategory = async (category) =>
    promisseHandler(Category.create(category));

  static findAllCategories = async () =>
    promisseHandler(Category.find({}).select(['-createdAt', '-updatedAt']));

  static findCategoryById = async (_id) =>
    promisseHandler(Category.findOne({ _id }));

  static updateCategoryById = (_id, body) =>
    promisseHandler(Category.updateOne({ _id }, { $set: body }));

  static deleteCategoryById = (_id) =>
    promisseHandler(Category.deleteOne({ _id }));
}

export default CategoryService;
