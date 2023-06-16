import routerx from 'express-promise-router';
import VideoController from '../controllers/video-controller';
import uploadMidleware from '../middleware/upload-midleware';

const videoRouter = routerx();

videoRouter.post(
  '/',
  uploadMidleware.single('video'),
  VideoController.createVideo
);
videoRouter.get('/', VideoController.findAllVideos);
videoRouter.get('/:id', VideoController.findVideoById);
videoRouter.get('/view/:id', VideoController.viewVideo);
videoRouter.get('/stream/:fileName', VideoController.getVideoByName);
videoRouter.get('/user/:userId', VideoController.findVideosByUserId);

export default videoRouter;
