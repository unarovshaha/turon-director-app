import React from "react";

export const lazyPage = (importer, name) => {
    return React.lazy(async () => {
        const module = await importer();
        return { default: module[name] };
    });
};