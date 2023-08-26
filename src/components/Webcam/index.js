import Cookies from 'js-cookie'
import {Redirect,Navigate} from 'react-router-dom'
import { ReactMediaRecorder } from "react-media-recorder";



const Webcam=()=>{
  
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
    //   return <Redirect to="/login" />
      return  window.location.href="./login";
    }
          return (
            <div>
            <ReactMediaRecorder
              video
              render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                <div>
                  <p>{status}</p>
                  <button onClick={startRecording}>Start Recording</button>
                  <button onClick={stopRecording}>Stop Recording</button>
                  <video src={mediaBlobUrl} controls autoPlay loop />
                </div>
              )}
            />
          </div>
          );
        };
    


export default Webcam;