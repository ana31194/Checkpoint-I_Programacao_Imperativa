//Constante 

const MenuMicroondas = (Alimento, Tempo) => {
    let aviso = 'Escolha seu Prato:';


    switch(Alimento) {
        //Escolhendo Pipoca
        case Alimento = 'Pipoca':
            aviso += 'Coloque o Tempo para ${Alimento}:';

            if(Tempo >= 10 < 20) {
                aviso += 'Prato pronto, bom apetite!!!'
            }
            else if (Tempo >=  20) {
                aviso += 'Seu Prato Queimou!!';
            } 
            else if (Tempo < 10) {
                aviso += 'Tempo Insuficiente!';
            } 
            else if (Tempo >= 30) {
                aviso += 'KABUUUUM!';
            } 
        break;

        //Escolhendo Macarrão
        case Alimento = 'Macarrão':
            aviso += 'Coloque o Tempo para ${Alimento}:';
            
            if (Tempo >= 8 < 16) {
            aviso += 'Prato pronto, bom apetite!!!';
        }
            else if (Tempo >= 16) {
                aviso += 'Seu Prato Queimou!!';
            } 
            else if (Tempo < 8) {
                aviso += 'Tempo Insuficiente!';
            }
             else if (Tempo >= 24) {
                aviso += 'KABUUUUM!'
            }
        break;

        //Escolhendo Carne
        case Alimento = 'Carne':
            aviso += 'Coloque o Tempo para ${Alimento}:';
            if (Tempo >= 15 < 30) {
                aviso += 'Prato pronto, bom apetite!!!';
            }
            else if (Tempo >= 30) {
                aviso += 'Seu Prato Queimou!!';
            } 
            else if (Tempo < 15) {
                aviso += 'Tempo Insuficiente!';
            }
             else if (Tempo >= 45) {
                aviso += 'KABUUUUM!';
            } 
        break;

        //Escolhendo Feijão
        case Alimento = 'Feijão':
            aviso += 'Coloque o Tempo para ${Alimento}:';
            if (Tempo >= 12 < 24) {
                aviso += 'Prato pronto, bom apetite!!!';
            }
            else if (Tempo > 24) {
                aviso += 'Seu Prato Queimou!!';
            } 
            else if (Tempo < 12) {
                aviso += 'Tempo Insuficiente!';
            } 
            else if (Tempo >= 36) {
                aviso += 'KABUUUUM!';
            } 
        break;

        //Escolhendo Brigadeiro
        case Alimento = 'Brigadeiro':
            aviso += 'Coloque o Tempo para ${Alimento}:';
            if (Tempo >= 8 < 16) {
                aviso += 'Prato pronto, bom apetite!!!';
            }
            else if (Tempo > 16) {
                aviso += 'Seu Prato Queimou!!';
            } 
            else if (Tempo < 8) {
                aviso += 'Tempo Insuficiente!';
            } 
            else if (Tempo >= 24) {
                aviso += 'KABUUUUM!';
            } 
        break;

        default :
            aviso += 'Esse Prato não Existe';
    } 
}
MenuMicroondas('Brigadeiro', 5);