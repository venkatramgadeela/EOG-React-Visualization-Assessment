import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import DroneSaga from "./DroneSaga";

export default [...ApiErrors, ...WeatherSagas, ...DroneSaga];
