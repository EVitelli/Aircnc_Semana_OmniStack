const multer = require('multer');
const path = require('path');

module.exports = {
    // configura como o multer irá armazenar as imagens ou os arquivos da aplicação.
    storage : multer.diskStorage({
        // .resolve monta o path de acordo om o sistema utilizado passando os parâmetros entr vírgula.
        // __dirname - variável global que informa qual o dirretório do arquivo atual.
        destination: path.resolve(__dirname,'..','..','uploads'),

        // informa como será o nome do arquivo
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);   

            callback(null,   `${name}-${Date.now()}${ext}`);
        },
    }),
}