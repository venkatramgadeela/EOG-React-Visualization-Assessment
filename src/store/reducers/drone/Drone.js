import * as actions from "../../drone/actions";

const initialState = {
    loading: false,
    error: false,
    entities: {}
};
export default function (state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_DRONE_POSITION_PENDING:
            return {
              ...state,
              loading: true,
            };
        case actions.FETCH_DRONE_POSITION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                entities: action.payload
            };
        case actions.API_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}
