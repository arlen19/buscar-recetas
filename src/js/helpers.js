export async function getJSON(url) {
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`Error ${res.status}: no se pudo obtener la receta`);
        return data;
    } catch (err) {
        throw err;
    }
}

import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
    return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`Request took too long! Timeout after ${s} second${s > 1 ? 's' : ''}`)), s * 1000)
    );
};