const initialState = {
    data: [],
    totalCount: 0
}

export const addBook = () => ({type: 'ADD_BOOK'})
export const initBasket = (count) => ({type: 'INIT_COUNT', count})

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                state
            }
        case 'INIT_COUNT':
            return {
                data: [],
                totalCount: 0
            }
        default:
            return {
                state
            }
    }
}