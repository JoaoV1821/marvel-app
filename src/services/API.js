import axios from "axios";

const instance = axios.create({
    baseURL: 'http://gateway.marvel.com',
    params: {
        "apikey": "ca513d3d0b4cf9666f526e3092deebf7",
        "ts": "1",
        "hash": "85e371482fd26779b4bc9cf3e8b1ca1a"
    },
})

const instanceBack = axios.create({
    baseURL: 'http://localhost:8080',
});


export const getAllUsers = async () => {

    try {
        const response = await instanceBack.get('/v1/usuarios/list');

        return response.data;
    } catch(error) {
        console.error(error.message);
    }
    
}


export const getComicList = async  () => {
    const response = await instance.get('v1/public/comics');

    const json = response.data;

    return json.data.results;
}


export const getAluguelList = async (id) => {
    const response = await instanceBack.get(`/v1/alugueis/list/${id}`);
    return response.data;
}

export const deleteAluguel = async (id) => {

    try {
        await instanceBack.delete(`/v1/alugueis/${id}`)
    } catch(error) {
        console.log(error.message)
    }
   
}

export const postAluguel = async (aluguel) => {
    await instanceBack.post('/v1/alugueis', 
    
    {
        "id_user": aluguel.idUser,
        "id_hq": aluguel.idHq,
        "titulo": aluguel.titulo,
        "imagem": aluguel.imagem,
        "data_devolucao": aluguel.dataDevolucao


    },

    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error.message);
})
}

export const postUser = async (user) => {

    await instanceBack.post('/v1/usuarios', 
    {
        'nome': user.nome,
        'email': user.email,
        'telefone': user.telefone,
        'senha': user.senha,
        'foto': user.foto

    },

    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    ).then((response) => {
        console.log(response.data);

    }).catch((error) => {
        console.log(error.message)
    })
}

export const updateUser = async (user) => {

    console.log(user);
    await instanceBack.put('/v1/usuarios', 
    {
        'id': user.id,
        'nome': user.nome,
        'email': user.email,
        'senha': user.senha,
        'telefone': user.telefone,
        'foto': ''

    },

    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    ).then((response) => {
        if (response.status === 200) {
            console.log('Usuário alterado com sucesso')
        } else {
            console.log('Erro ao cadastrar')
        }

    }).catch((error) => {
        console.log(error.message)
    })
}




export const authenticateUser = async (user) => {

    
        const response = await instanceBack.post('v1/login', 
            {
                'email': user.email,
                'senha': user.senha
            },
    
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        
        )

    

        if (response.status === 200) {
            console.log(response.status)
            return response.data;
        } 

        if (response.status === 400) {
            console.log(response.status)
        }

      
}
