import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/drone/actions";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  BicyclingLayer
} from "react-google-maps";
import LinearProgress from "@material-ui/core/LinearProgress";

class DroneMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: true
    };
  }
  componentDidMount() {
    this.props.onLoad();
    
  }
  render() {
    const { loading, entities } = this.props;
    if (loading) return <LinearProgress />;
    let maparray = entities;
    let lat = null;
    let lang = null
    if (Object.entries(maparray).length ==! 0 && maparray.constructor === Object
    ) {
      let totaldata = maparray.data;
      const lastobj =
        totaldata[Object.keys(totaldata)[Object.keys(totaldata).length - 1]];
      lat = lastobj.latitude;
      lang = lastobj.longitude;

    }
    const ShowMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={4}
          defaultCenter={{
            lat: lat,
            lng: lang
          }}
        >
          {this.state.isMarkerShown && (
            <Marker
              position={{
                lat: lat,
                lng: lang
              }}
            />
          )}
          <BicyclingLayer autoUpdate />
        </GoogleMap>
      ))
    );
    return (
      <div>
        <div>
          <ShowMap
            isMarkerShown
            containerElement={
              <div
                style={{
                  height: `500px`,
                  width: "500px"
                }}
              />
            }
            loadingElement={<div style={{ height: `100%` }} />}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOi43iiXwBZdFsdyTNWtOGZiKBOdFuyjI&v=3.exp&libraries=geometry,drawing,places"
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { loading, entities } = state.Drone;
  return {
    loading,
    entities
  };

};

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE_POSITION_PENDING,

    })
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DroneMap);