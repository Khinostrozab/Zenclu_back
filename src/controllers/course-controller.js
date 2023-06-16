import httpError from 'http-errors';
import path from 'path';
import CourseService from '../services/course-service';

class CourseController {
  static createCourse = async ({ body, file }, res, next) => {
    const courseEntity = {
      ...body.course,
      imagePreview: file.filename,
      categories: [body.course.category],
    };
    const [error, course] = await CourseService.createCourse(courseEntity);
    if (error) return next(httpError.InternalServerError());
    return res.json(course);
  };

  static findAllCourses = async (req, res, next) => {
    const [error, courses] = await CourseService.findAllCourses();
    if (error) return next(httpError.InternalServerError());
    return res.json(courses);
  };

  static findCourseById = async ({ params }, res, next) => {
    const [error, course] = await CourseService.findCourseById(params.id);
    if (error || !course) return next(this.setNotFoundError(params.id));
    return res.json(course);
  };

  static findCourseByUserId = async ({ params }, res, next) => {
    const [error, course] = await CourseService.findCourseByUserId(
      params.userId
    );
    if (error || !course) return next(this.setNotFoundError(params.userId));
    return res.json(course);
  };

  static getPreviewImage = async ({ params }, res) => {
    const imagePath = path.join(
      __dirname,
      '..',
      '..',
      `/uploads/images/${params.id}`
    );
    res.sendFile(imagePath);
  };

  static checkoutCourse = async ({ body }, res, next) => {
    const [error, checkout] = await CourseService.checkoutCourse(body);
    if (error) return next(httpError.InternalServerError());
    return res.json(checkout);
  };

  static findCheckoutCourseByUserId = async ({ params }, res, next) => {
    const [error, course] = await CourseService.findcheckoutCoursesByUserId(
      params.userId
    );
    if (error || !course) return next(this.setNotFoundError(params.userId));
    return res.json(course);
  };

  static setNotFoundError = (id) =>
    httpError.NotFound(`resource with id ${id} not found`);
}

export default CourseController;
