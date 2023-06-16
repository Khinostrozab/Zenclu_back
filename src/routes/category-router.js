import routerx from 'express-promise-router';
import CategoryController from '../controllers/category-controller';
import categoryValidationSchema from '../schemas/category-validation-schema';
import { validateMidleware } from '../middleware';

const categoryRouter = routerx();

categoryRouter.post(
  '/',
  validateMidleware(categoryValidationSchema),
  CategoryController.addTodo
);
categoryRouter.get('/', CategoryController.findAllCategories);
categoryRouter.get('/:id', CategoryController.findCategoryById);
categoryRouter.put(
  '/:id',
  validateMidleware(categoryValidationSchema),
  CategoryController.updateCategoryById
);
categoryRouter.delete('/:id', CategoryController.deleteCategoryById);

export default categoryRouter;
