import req from "../lib/req";

export default function useFiles() {
    function uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);
        return req({ method: 'POST', uri: '/file', data: formData })
    };

    return {
        uploadFile
    };
};