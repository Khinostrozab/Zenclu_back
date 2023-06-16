import routerx from 'express-promise-router';
import CourseController from '../controllers/course-controller';
import uploadMidleware from '../middleware/upload-midleware';

const courseRouter = routerx();

courseRouter.post(
  '/',
  uploadMidleware.single('imagePreview'),
  CourseController.createCourse
);
courseRouter.get('/', CourseController.findAllCourses);
courseRouter.get('/:id', CourseController.findCourseById);
courseRouter.get('/user/:userId', CourseController.findCourseByUserId);
courseRouter.get('/image/:id', CourseController.getPreviewImage);
courseRouter.post('/checkout', CourseController.checkoutCourse);
courseRouter.get(
  '/checkout/:userId',
  CourseController.findCheckoutCourseByUserId
);

export default courseRouter;
