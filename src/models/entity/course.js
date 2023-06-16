import { model, Schema } from 'mongoose';

const CourseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      default: 0,
    },
    duration: {
      type: String,
      required: true,
    },
    chapterCount: {
      type: Number,
      default: 0,
    },
    userCount: {
      type: Number,
      default: 0,
    },
    imagePreview: {
      type: String,
      default: '',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    categories: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: false,
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'video',
        required: false,
      },
    ],
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

const Course = model('course', CourseSchema);

export default Course;
