import "isomorphic-fetch";

export const FETCH_DRONE_POSITION_PENDING = "FETCH_DRONE_POSITION_PENDING";
export const API_ERROR = "API_ERROR_RECEIVED";
export const FETCH_DRONE_POSITION_SUCCESS = "FETCH_DRONE_POSITION_SUCCESS";


export const findDroneLocation = async () => {
  const response = await fetch(
    `https://react-assessment-api.herokuapp.com/api/drone`
  );
  if (!response.ok) {
    return { error: { code: response.status } };
  }
  const json = await response.json();
  return { data: json };
};


