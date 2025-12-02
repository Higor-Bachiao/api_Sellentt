const validateFieldTitle = (request, response, next) => {
    const { body } = request;

    if (body.title == undefined){
        return response.status(400).json({ message: 'O campo "title" é obrigatório' });
    }
    if (body.title == ''){
        return response.status(400).json({ message: 'O campo "title" é obrigatório' });
    }

    next();
}

const validateFieldStatus =(request, response, next) => {
    const { body } = request;
    const validStatuses = ['pendente', 'em_progresso', 'concluído'];

    if (body.status && !validStatuses.includes(body.status)) {
        return response.status(400).json({ message: `O campo "status" é obrigatório` });
    }

    next();
}

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
}