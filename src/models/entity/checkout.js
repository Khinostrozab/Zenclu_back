import { model, Schema } from 'mongoose';

const CheckoutSchema = new Schema(
  {
    cardNumber: {
      type: String,
      required: true,
      select: false,
    },
    expiryDate: {
      type: String,
      required: true,
      select: false,
    },
    cvv: {
      type: String,
      required: true,
      select: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'course',
      required: true,
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

const Checkout = model('checkout', CheckoutSchema);

export default Checkout;
