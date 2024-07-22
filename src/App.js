import logo from './logo.svg';
import './App.css';
import hashira from "./images/Hashiras.jpeg"
import tanjiro from "./audio/Tanjiro.mp3"
import muzan from "./video/Castle trailer.mp4"
function App() {
  return (
    <div className="App">
      <h1 className="mainHeading">Demon Slayer</h1>
      <h2>These are from internet</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLztnCn1gzVEtVjV0D_5NSldw50w-roWBbRw&s"></img>
     <br></br>
      <video className="video" src="https://imdb-video.media-imdb.com/vi519095833/1434659607842-pgv4ql-1712597426734.mp4?Expires=1721663339&Signature=i0cZpEWqFbrMw6zDLyKo1lLX8OUXe0sGFUn4~qgU62r5VPzDn3BmVuE2GtmnDlX7feS5tHDQZuBgvPQEk~cQWT7NAkQ78oGfHp5F0AgPThRg56vGg88UKack3ed-hjrEkybCJ-cBOgaPkezzheUptWiwSHWY5rpZ9sLZzV7BRx2o1Ki1ca33ExijWVrLlsYZMYjCGAXfq3LTWc5K-MHO~zDV-ZH7ZL-BJP6DYsWT~SRDsznb8urNGsO~AZJr3I4XT1DrVB7yBMRTVk4l3JAoMezFYHtOSc~F8CXQ5y-3V6FWZxJ9iIVlSX7lRVMJaPmiASsoCXAOpZLIsXv9EKuUKA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" controls autoPlay muted></video>
      <br></br>
      <br></br>
      <audio src="https://animepapa.com/wp-content/uploads/2024/02/Demon-Slayer-Opening-Song-4.mp3"  controls></audio>
      <hr></hr>
      <h2> These are from public</h2>
     <img src="./images/DmSlayer.jpeg"></img>
     <br></br><br></br>
     <video className="video" src="./video/tanjiro trailer.mp4" controls autoPlay muted></video>
     <br></br>
     <br></br>
     <audio src="./audio/zentisu.mp3"  controls></audio>
     <hr></hr>
     <h2>These are from src</h2>
     <img src={hashira}></img>
     <br></br>
     <br></br>
     <video className="video" src={muzan} controls autoPlay muted></video>
     <br></br>
     <br></br>
     <audio src={tanjiro} controls></audio>
      </div>
  );
}

export default App;
