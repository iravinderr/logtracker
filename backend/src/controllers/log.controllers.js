import { LOG } from "../models/log.models.js";
import { asyncHandler } from "../utils/handler.utils.js";
import { ErrorResponse, SuccessResponse } from "../utils/responses.utils.js";

export const createLog = asyncHandler(async (req, res) => {
    const { logLevel, source, message } = req.body;

    const log = await LOG.create({ logLevel, source, message });

    return SuccessResponse(res, `Log created`);
});


export const getLogs = asyncHandler(async (req, res) => {
    const logs = await LOG.find()
});