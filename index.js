const audioClips = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  function App() {

    const [text, setText] = React.useState("");

    return (
        <div id="drum-machine">
            <div id="display" className="d-flex justify-content-center align-items-center min-vh-100 text-white">
                <div id="box" className="text-center">
                    <h2>Simple drum machine</h2>
                    <h6>Built with React and Bootstrap</h6>
                    <div>
                        <div className="row">
                                {audioClips.map(clip => (
                                    <Pad key={clip.id} clip = {clip} setText = {setText}/>
                                ))}
                        </div>
                    </div>
                    <br />
                    <div class="">
                        <h3>{text}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Pad({clip, setText}) {

    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
         document.addEventListener("keydown", handleKeyPress);
         return () => {
             document.removeEventListener("keydown", handleKeyPress);
         }
    }, [])

    const handleKeyPress = (event) => {
        if (event.keyCode === clip.keyCode) {
            playSound();
        }
    }

    const playSound = () => {
        const audioTag = document.getElementById(clip.keyTrigger)
        audioTag.currentTime = 0;
        audioTag.play();
        setActive(true);
        setTimeout(() => {setActive(false)}, 300);
        setText(clip.id);
    }

    return (
        <div className="col-4 btn-group p-4">
            <div 
            id={clip.url}
            onClick={playSound} 
            className={`drum-pad btn btn-secondary ${active && "btn-warning"}`}>
                <audio className="clip" id={clip.keyTrigger} src={clip.url} />
                {clip.keyTrigger}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));