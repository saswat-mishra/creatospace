import {configureStore} from '@redUXJS/toolkit'
import userReducer from '../feature/userSlice'

export default configureStore({
    reducer:{
        user: userReducer
    }
})