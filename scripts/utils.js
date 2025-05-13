export function transformImageSrc(imageSrc) {
    if (!imageSrc || isAuthorMode) {
        return imageSrc;
    }

    imageSrc = imageSrc.replace('width=750', 'width=2000');
    imageSrc = imageSrc.replace('format=jpg', 'format=webply');
    imageSrc = imageSrc.replace('optimize=medium', 'optimize=high');
    
    return imageSrc;
}

export const isAuthorMode = window.location.href.includes('.html');
