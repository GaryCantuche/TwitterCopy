import fs from 'fs';
export function imageController(imagePath){
    try {
        const content = fs.readFileSync(`${__dirname}/../../${imagePath}`).toString('base64');
        return content;
    } catch (err) {
        return '';
    }
}