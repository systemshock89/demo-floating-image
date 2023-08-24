'use strict';

document.addEventListener('mousemove', e => {
    // для изображения вместо курсора берем позицию курсора
    document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
});