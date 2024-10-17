import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleMapReact from "google-map-react";
import { googleAPKey } from "../../Utility/GoogleAPIKey";

const Map = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.value = "";
  };

  const handleSend = () => {
    toast("Message send succesfully!");
  };

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div>
      <Helmet>
        <title>contact</title>
      </Helmet>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: googleAPKey }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <Map lat={59.955413} lng={30.337844} text="My Marker" />
                </GoogleMapReact>
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onClick={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Say something"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    onClick={handleSend}
                    type="submit"
                    value="Send Message"
                    className="btn btn-neutral"
                  />
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
