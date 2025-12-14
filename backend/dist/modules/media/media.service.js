import path from "path";
import fs from "fs/promises";
import * as replace from "replace-in-file";
import { logger } from "../../utils/logger";
const MEDIA_ROOT_DIRS = [
    path.resolve(process.cwd(), "../frontend/public/images"),
    path.resolve(process.cwd(), "../frontend/src/assets"),
    // Add any other directories you want to scan
];
function getMimeType(extension) {
    switch (extension) {
        case ".jpg":
        case ".jpeg":
            return "image/jpeg";
        case ".png":
            return "image/png";
        case ".gif":
            return "image/gif";
        case ".mp4":
            return "video/mp4";
        case ".webm":
            return "video/webm";
        case ".svg":
            return "image/svg+xml";
        default:
            return null;
    }
}
export class MediaService {
    async listMedia() {
        logger.info({ MEDIA_ROOT_DIRS }, "Starting media scan...");
        const allMedia = [];
        for (const dir of MEDIA_ROOT_DIRS) {
            logger.info({ directory: dir }, "Scanning directory");
            try {
                const files = await fs.readdir(dir, { recursive: true });
                logger.info({ directory: dir, count: files.length }, "Files found");
                for (const file of files) {
                    const filePath = path.join(dir, file);
                    const fileStats = await fs.stat(filePath).catch(() => null);
                    if (!fileStats || fileStats.isDirectory())
                        continue;
                    const fileExt = path.extname(file).toLowerCase();
                    const mimeType = getMimeType(fileExt);
                    if (!mimeType) {
                        logger.info({ filePath }, "Skipping non-media file");
                        continue;
                    }
                    const relativePath = path.relative(path.resolve(process.cwd(), ".."), filePath);
                    logger.info({ relativePath }, "Found media file");
                    let url = `/${relativePath.replace(/\\/g, "/")}`;
                    if (dir.includes('public')) {
                        const publicRelativePath = path.relative(path.resolve(process.cwd(), "../frontend/public"), filePath);
                        url = `/${publicRelativePath.replace(/\\/g, "/")}`;
                    }
                    else if (dir.includes('assets')) {
                        const assetsRelativePath = path.relative(path.resolve(process.cwd(), "../frontend/src/assets"), filePath);
                        url = `/src/assets/${assetsRelativePath.replace(/\\/g, "/")}`;
                    }
                    allMedia.push({
                        id: Buffer.from(relativePath).toString("base64"),
                        filename: path.basename(file),
                        url,
                        mime_type: mimeType,
                        size: fileStats.size,
                        createdAt: fileStats.mtime,
                        location: path.dirname(`/${relativePath.replace(/\\/g, "/")}`), // Calculate location
                    });
                }
            }
            catch (error) {
                logger.error({ directory: dir, error }, "Could not scan directory");
            }
        }
        logger.info({ count: allMedia.length }, "Media scan complete.");
        return allMedia.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    async recordUpload(file, description) {
        const relativePath = path.relative(path.resolve(process.cwd(), ".."), file.path);
        const fileStats = await fs.stat(file.path);
        const media = {
            id: Buffer.from(relativePath).toString("base64"),
            filename: file.filename,
            url: `/uploads/${file.filename}`,
            mime_type: file.mimetype,
            size: file.size,
            createdAt: fileStats.mtime,
            location: "/uploads",
        };
        logger.info({ media, description }, "Recorded new media upload");
        return media;
    }
    async renameMedia(oldPath, newNameWithoutExt) {
        const oldAbsolutePath = path.resolve(process.cwd(), "..", oldPath.substring(1));
        const extension = path.extname(oldAbsolutePath);
        const newName = `${newNameWithoutExt}${extension}`;
        const newAbsolutePath = path.join(path.dirname(oldAbsolutePath), newName);
        // 1. Rename the physical file
        await fs.rename(oldAbsolutePath, newAbsolutePath);
        // 2. Perform find and replace across the frontend codebase
        const newUrl = path.dirname(oldPath) + "/" + newName;
        const options = {
            files: path.resolve(process.cwd(), "../frontend/src/**/*.tsx"),
            from: new RegExp(oldPath, "g"),
            to: newUrl,
        };
        try {
            const results = await replace.default(options);
            logger.info({ results }, "File content replacement results");
        }
        catch (error) {
            logger.error({ error }, "Error during file content replacement");
            // Even if replacement fails, the file was renamed, so don't throw
        }
    }
    async changeMediaPath(oldPath, newPath) {
        // ... (rest of the file remains the same)
    }
    async deleteMedia(mediaPath) {
        // ... (rest of the file remains the same)
    }
}
//# sourceMappingURL=media.service.js.map