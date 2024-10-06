"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPostcssConfiguration = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const postcssConfigurationFiles = ['postcss.config.json', '.postcssrc.json'];
function generateSearchDirectories(roots) {
    return roots.map(root => {
        const entries = (0, node_fs_1.readdirSync)(root, { withFileTypes: true });
        return {
            root,
            files: new Set(entries.filter(entry => entry.isFile()).map(entry => entry.name)),
        };
    });
}
function findFile(searchDirectories, potentialFiles) {
    for (const { root, files } of searchDirectories) {
        for (const potential of potentialFiles) {
            if (files.has(potential)) {
                return (0, node_path_1.join)(root, potential);
            }
        }
    }
    return undefined;
}
function readPostcssConfiguration(configurationFile) {
    const data = (0, node_fs_1.readFileSync)(configurationFile, 'utf-8');
    const config = JSON.parse(data);
    return config;
}
function loadPostcssConfiguration(projectRoot) {
    // A configuration file can exist in the project or workspace root
    const searchDirectories = generateSearchDirectories([projectRoot]);
    const configPath = findFile(searchDirectories, postcssConfigurationFiles);
    if (!configPath) {
        return undefined;
    }
    const raw = readPostcssConfiguration(configPath);
    // If no plugins are defined, consider it equivalent to no configuration
    if (!raw.plugins || typeof raw.plugins !== 'object') {
        return undefined;
    }
    // Normalize plugin array form
    if (Array.isArray(raw.plugins)) {
        if (raw.plugins.length < 1) {
            return undefined;
        }
        const config = { plugins: [] };
        for (const element of raw.plugins) {
            if (typeof element === 'string') {
                config.plugins.push([element]);
            }
            else {
                config.plugins.push(element);
            }
        }
        return config;
    }
    // Normalize plugin object map form
    const entries = Object.entries(raw.plugins);
    if (entries.length < 1) {
        return undefined;
    }
    const config = { plugins: [] };
    for (const [name, options] of entries) {
        if (!options || (typeof options !== 'object' && typeof options !== 'string')) {
            continue;
        }
        config.plugins.push([name, options]);
    }
    return config;
}
exports.loadPostcssConfiguration = loadPostcssConfiguration;
//# sourceMappingURL=postcss-configuration.js.map