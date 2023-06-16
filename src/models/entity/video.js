import { model, Schema } from 'mongoose';

const VideoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    views: {
      type: Number,
      default: 0,
    },
    duration: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: '',
    },
  },
  {
    versionKey: false,
    timestamps: true,
    id: true,
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Video = model('video', VideoSchema);

export default Video;
