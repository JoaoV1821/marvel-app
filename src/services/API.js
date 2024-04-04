import axios from "axios";

const instance = axios.create({
    baseURL: 'http://gateway.marvel.com',
    params: {
        "apikey": "your api key",
        "ts": "a timestamp",
        "hash": "your hash"
    },
})


export const getComicList = async  () => {
    const response = await instance.get('v1/public/comics');

    const json = response.data;

    return json;
}

export const postUser = async (user) => {

    await instance.post('', 
    {
        'nome': user.nome,
        'email': user.email,
        'telefone': user.telefone,
        'endereco': user.endereco

    },

    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    ).then((response) => {
        if (response.status === 200) {
            console.log('Usuário cadastrado')
        } else {
            console.log('Erro ao cadastrar')
        }

    }).catch((error) => {
        console.log(error.message)
    })
}

export const updateUser = async (user) => {

    console.log(user)
    await instance.put('', 
    {
        'nome': user.nome,
        'email': user.email,
        'telefone': user.telefone,
        'endereco': user.endereco

    },

    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    ).then((response) => {
        if (response.status === 200) {
            console.log('Usuário cadastrado')
        } else {
            console.log('Erro ao cadastrar')
        }

    }).catch((error) => {
        console.log(error.message)
    })
}




export const authenticateUser = async (email, senha) => {
    await instance.post('user/auth', 
        {
            'email': email,
            'senha': senha
        },

        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
    ).then((response) => {
        if (response.status === 200) {
            return {status: response.status, token: response.data.token}
        }

    }).catch((error) => {
        throw new Error(error.message)
    })
}

const getTokenHeader = async  () => {

    try {
        await instance.get().then()
    } catch(error) {

    }
    
}