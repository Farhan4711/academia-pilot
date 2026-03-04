"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var gray_matter_1 = require("gray-matter");
// Get all files recursively
function getAllFiles(dirPath, arrayOfFiles) {
    if (arrayOfFiles === void 0) { arrayOfFiles = []; }
    var files = fs_1.default.readdirSync(dirPath);
    files.forEach(function (file) {
        var fullPath = path_1.default.join(dirPath, file);
        if (fs_1.default.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        }
        else {
            arrayOfFiles.push(fullPath);
        }
    });
    return arrayOfFiles;
}
function verifyNewsRoutes() {
    return __awaiter(this, void 0, void 0, function () {
        var contentDir, allFiles, successCount, failCount, _i, allFiles_1, file, fileContent, data, relativePath, parts, category, slug, expectedHtmlPath1, expectedHtmlPath2;
        return __generator(this, function (_a) {
            contentDir = path_1.default.join(process.cwd(), 'content', 'news');
            allFiles = getAllFiles(contentDir).filter(function (file) { return file.endsWith('.mdx'); });
            console.log("Found ".concat(allFiles.length, " news articles to verify."));
            successCount = 0;
            failCount = 0;
            for (_i = 0, allFiles_1 = allFiles; _i < allFiles_1.length; _i++) {
                file = allFiles_1[_i];
                fileContent = fs_1.default.readFileSync(file, 'utf8');
                data = (0, gray_matter_1.default)(fileContent).data;
                relativePath = path_1.default.relative(contentDir, file);
                parts = relativePath.split(path_1.default.sep);
                category = data.category || (parts.length > 1 ? parts[0] : 'general');
                // Ensure category is lowercase for URL
                category = category.toString().toLowerCase();
                slug = data.slug;
                if (!slug) {
                    slug = path_1.default.basename(file, '.mdx');
                }
                expectedHtmlPath1 = path_1.default.join(process.cwd(), 'out', 'news', category, "".concat(slug, ".html"));
                expectedHtmlPath2 = path_1.default.join(process.cwd(), 'out', 'news', category, slug, "index.html");
                if (fs_1.default.existsSync(expectedHtmlPath1) || fs_1.default.existsSync(expectedHtmlPath2)) {
                    successCount++;
                }
                else {
                    console.error("\u274C Missing static route for: /news/".concat(category, "/").concat(slug));
                    failCount++;
                }
            }
            console.log('---');
            console.log("\u2705 Verified: ".concat(successCount));
            if (failCount > 0) {
                console.error("\u274C Failed: ".concat(failCount));
                process.exit(1);
            }
            else {
                console.log('🚀 All news routes successfully exported!');
            }
            return [2 /*return*/];
        });
    });
}
verifyNewsRoutes().catch(console.error);
