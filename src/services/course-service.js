import Checkout from '../models/entity/checkout';
import Course from '../models/entity/course';
import { promisseHandler } from '../utils/promisse-handler';

class CourseService {
  static createCourse = async (course) =>
    promisseHandler(Course.create(course));

  static patchVideoCourseById = (_id, videoId) =>
    promisseHandler(
      Course.findOneAndUpdate({ _id }, { $push: { videos: videoId } })
    );

  static findCourseById = async (id) =>
    promisseHandler(
      Course.findOne({ _id: id })
        .populate({
          path: 'user',
          select: 'fullName avatar',
        })
        .populate('categories', '-createdAt -updatedAt')
        .populate('videos', '-createdAt -updatedAt')
        .select(['-createdAt', '-updatedAt'])
    );

  static findCourseByUserId = async (userId) =>
    promisseHandler(
      Course.find({ user: userId })
        .populate({
          path: 'user',
          select: 'fullName avatar',
        })
        .populate('categories', '-createdAt -updatedAt')
        .populate('videos', '-createdAt -updatedAt')
        .select(['-createdAt', '-updatedAt'])
    );

  static findAllCourses = async () =>
    promisseHandler(
      Course.find({})
        .populate({
          path: 'user',
          select: 'fullName avatar',
        })
        .populate('categories', '-createdAt -updatedAt')
        .populate('videos', '-createdAt -updatedAt')
        .select(['-createdAt', '-updatedAt'])
    );

  static findcheckoutCoursesByUserId = async (userId) =>
    promisseHandler(
      Checkout.find({ user: userId })
        .populate({
          path: 'course',
          select: '-createdAt -updatedAt',
          populate: {
            path: 'videos',
            model: 'video',
            select: '-createdAt -updatedAt',
          },
        })
        .select(['-createdAt', '-updatedAt'])
    );

  static checkoutCourse = async (checkout) =>
    promisseHandler(Checkout.create(checkout));
}

export default CourseService;
