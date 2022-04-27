const mongoose = require('mongoose')

const { Schema } = mongoose

const OrderSchema = new Schema({

    uuid: { type: String },

    process: { type: String },

    processStep: { type: String },

    processHistory: [
        {
            process: { type: String},
            processStep: { type: String },
        }
    ],

    isPaid: { type: Boolean },

    label: { type: String },

    data: {
        rawAmount: { type: Number },
        totalAmount: { type: Number },
        discount: { type: Number },
        taxesAmount: { type: Number },
        shippingAmount: { type: Number },
        creationDate: { type: Date, default: Date.now },
        site: { type: String },
        shippingType: { type: String },
        storePickupId: { type: String },
        deliveryType: { type: String },
        estimatedDeliveryDate: { type: String },
        scheduleId: { type: String },
        salesChannelId: { type: String },
        systemId: { type: String },
        billingAddress: {
            country: { type: String },
            city: { type: String },
            address: { type: String },
            location: { type: String },
        },
        shippingAddress: {
            country: { type: String },
            address: { type: String },
            location: {
                communeId: { type: String }
            },
            city: { type: String },
            contact: {
                name: { type: String },
                email: { type: String },
                phone: { type: String },
            },
        },
        items: [
            {
                process: { type: String },
                proccessStep: { type: String },
                sku: { type: String },
                name: { type: String },
                quantity: { type: Number },
                rawPrice: { type: Number },
                listPrice: { type: Number },
                salePrice: { type: Number },
                media: {
                    thumb: { type: String },
                    medium: { type: String },
                    large: { type: String }
                },
                detailLink: { type: String },
                color: {
                    code: { type: String },
                    name: { type: String }
                },
                size: {
                    code: { type: String },
                    name: { type: String }
                },
                model: {
                    code: { type: String },
                    description: { type: String }
                },
                brand: { type: String }
            }
        ],

        customer: {
            id: { type: String },
            name: { type: String },
            email: { type: String },
            phone: { type: String },
            systemId: { type: String },
        },

        paymentInfo : {
            type: { type: String },
            amount: { type: Number },
        }

    },

})

module.exports = mongoose.model('Orders', OrderSchema)