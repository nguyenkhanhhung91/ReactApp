export function CreatCard(header, message){
    const CREATE_CARD = 'CREATE_CARD'
    let array=[header, message]      
    return{
        type : "CREATE_CARD",
        array
    }
}

export function UpdateMsg(cardnumber, message){
    const UPDATE_MSG = 'UPDATE_MSG'

    return{
        type : "UPDATE_MSG",
        cardnumber
    }
}

export function DeleteCard(cardnumber){
    const DELETE_CARD = 'DELETE_CARD'
    
    return{
        type : "DELETE_CARD",
        cardnumber
    }
}