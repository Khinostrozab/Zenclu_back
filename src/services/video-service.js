import Video from '../models/entity/video';
import { promisseHandler } from '../utils/promisse-handler';

class VideoService {
  static createVideo = async (video) => promisseHandler(Video.create(video));

  static findVideoById = async (id) =>
    promisseHandler(
      Video.findOne({ _id: id })
        .populate({
          path: 'user',
          select: 'fullName avatar',
        })
        .populate('categories', '-createdAt -updatedAt')
        .select(['-createdAt', '-updatedAt'])
    );

  static findVideosByUserId = async (userId) =>
    promisseHandler(
      Video.find({ user: userId })
        .populate({
          path: 'user',
          select: 'fullName avatar',
        })
        .populate('categories', '-createdAt -updatedAt')
        .select(['-createdAt', '-updatedAt'])
    );

  static findAllVideos = async () =>
    promisseHandler(
      Video.find({})
        .populate({
          path: 'user',
          select: 'fullName avatar',
        })
        .populate('categories', '-createdAt -updatedAt')
        .select(['-createdAt', '-updatedAt'])
    );
}

export default VideoService;
