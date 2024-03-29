var mongoose = require("mongoose");
require("mongoose-double")(mongoose);

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    orderItems_hor: [
      {
        name: { type: String, required: true },
        amount: { type: String, required: true },
        price: { type: Number, required: true },
        width: { type: Number, required: true },
        height: { type: Number, required: true },
        price: { type: Number, required: true },
        control: { type: String, required: true },
        control_length: { type: String, required: true },
        lamella_color: { type: String, required: true },
        profile_color: { type: String, required: true },
        provedeni: { type: String, required: true },
        barva: { type: String, required: true },
        okno: { type: String, required: true },
        podlozky: { type: String, required: true },
      },
    ],
    shippingAddress: {
      fullName_ship: { type: String, required: true },
      address_ship: { type: String, required: true },
      city_ship: { type: String, required: true },
      postalCode_ship: { type: String, required: true },
      country_ship: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    //user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    user: { type: String, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
