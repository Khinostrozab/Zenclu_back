import httpError from 'http-errors';
import fs from 'fs';
import path from 'path';
import VideoService from '../services/video-service';
import CourseService from '../services/course-service';

class VideoController {
  static createVideo = async ({ body, file }, res, next) => {
    const courceId = body.video.courseId;
    const videoEntity = {
      ...body.video,
      url: file.filename,
    };
    console.log('file', file);
    const [error, video] = await VideoService.createVideo(videoEntity);
    if (error) return next(httpError.InternalServerError());
    const [errorCourse, course] = await CourseService.patchVideoCourseById(
      courceId,
      video.id
    );
    if (errorCourse) return next(httpError.InternalServerError());
    return res.json(course);
  };

  static findVideoById = async ({ params }, res, next) => {
    const [error, video] = await VideoService.findVideoById(params.id);
    if (error || !video) return next(this.setNotFoundError(params.id));
    return res.json(video);
  };

  static findVideosByUserId = async ({ params }, res, next) => {
    const [error, videos] = await VideoService.findVideosByUserId(
      params.userId
    );
    if (error || !videos) return next(this.setNotFoundError(params.userId));
    return res.json(videos);
  };

  static findAllVideos = async (req, res, next) => {
    const [error, videos] = await VideoService.findAllVideos();
    if (error) return next(httpError.InternalServerError());
    return res.json(videos);
  };

  static uploadVideo = async (req, res) => {
    res.json(req.files);
  };

  static viewVideo = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'video.html'));
  };

  static getVideoByName = async (req, res) => {
    const { headers, params } = req;
    const { range } = headers;
    const videoPath = path.join(
      __dirname,
      '..',
      '..',
      `/uploads/videos/${params.fileName}`
    );
    const videoSize = fs.statSync(videoPath).size;

    const chunkSize = 1 * 1e6;
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + chunkSize, videoSize - 1);

    const contentLength = end - start + 1;

    const responseHeaders = {
      'Content-Range': `bytes ${start}-${end}/${videoSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(206, responseHeaders);

    const stream = fs.createReadStream(videoPath, { start, end });
    stream.pipe(res);
  };

  static setNotFoundError = (id) =>
    httpError.NotFound(`resource with id ${id} not found`);
}

export default VideoController;
