import LoginFormReducer from './LoginReducer';
import DefectTrackerReducer from './DefectTrackerReducer';
import DbReducer from './DbReducer';
import AddDefectReducer from './AddDefectReducer'
import {combineReducers} from 'redux';
export default combineReducers({login:LoginFormReducer,tracker:DefectTrackerReducer,db:DbReducer,defect:AddDefectReducer})