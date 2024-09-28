import mongoose, { Schema } from "mongoose";

const logSchema = new Schema(
    {
        logLevel: {
            type: String,
            enum: ["INFO", "DEBUG", "WARN", "ERROR", "FATAL"],
            required: true
        },
        source: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: false, // Optional field
            },
        ipAddress: {
            type: String,
            required: false, // Optional field
        },
        requestId: {
            type: String,
            required: false, // Optional field
        },
        context: {
            type: Object,
            required: false, // Optional field
        },
        stackTrace: {
            type: String,
            required: false, // Optional field
        },
        environment: {
            type: String,
            required: true,
        },
        serviceVersion: {
            type: String,
            required: false, // Optional field
        },
        metrics: {
            type: Object,
            required: false, // Optional field
        },
    },

    { timestamps: true }
);

export const LOG = mongoose.model("LOG", logSchema);