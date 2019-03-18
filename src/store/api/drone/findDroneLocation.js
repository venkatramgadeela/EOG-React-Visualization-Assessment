import "isomorphic-fetch";


export const findDroneLocation = async () => {
    const response = await fetch(
        `https://react-assessment-api.herokuapp.com/api/drone`
    );
    if (!response.ok) {
        return { error: { code: response.status } };
    }
    const json = await response.json();
    console.log(json);

    return { data: json };
};
