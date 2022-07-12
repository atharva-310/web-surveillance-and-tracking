import React, {createRef, useEffect} from 'react'



function WebCam(props) {
    const videoRef = createRef(null);
    const canvasRef = createRef(null);
    console.log(props)
 

    useEffect(()=>{
        const drawFaceRectangles = (video, canvas, faces) => {
            const ctx = canvas.getContext('2d');
          
            ctx.beginPath();
            ctx.clearRect(0, 0, ctx.width, ctx.height);
            for (const [x, y, width, height] of faces.faces) {
              ctx.strokeStyle = "#49fb35";
              ctx.beginPath();
              ctx.rect(x, y, width, height);
              ctx.stroke();
            }
          };
        console.log("connecting to websocket")
        let intervalId
        const webSocket =   new  WebSocket('ws://face-tracking-websocket.herokuapp.com/face-detection');
        
        webSocket.addEventListener('open', (event) => {
            console.log("connected to webSocket");
            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    acingMode: "user",
                    height: {min: props.height},
                    width: props.width
                }
              }).then(stream => {
                videoRef.current.srcObject = stream;
                videoRef.current.play()
                    .then(() => {
                        canvasRef.current.width = videoRef.current.videoWidth;
                        canvasRef.current.height = videoRef.current.videoWidth;
                        const ctx = canvasRef.current.getContext('2d');
                        intervalId = setInterval(() => {
                        ctx.drawImage(videoRef.current,0,0)
                        canvasRef.current.toBlob((blob) => webSocket.send(blob), 'image/jpeg');
                        },1000);
                    })
            }).catch(err => console.log(err.name + ": " + err.message));
                
        });

        webSocket.addEventListener('message',  (event)=>{
            const nameLoc = JSON.parse(event.data)
            console.log(nameLoc);
            drawFaceRectangles(videoRef.current,  canvasRef.current, nameLoc );
          });
          webSocket.addEventListener('close', function () {
            videoRef.current.pause();
            window.clearInterval(intervalId);
            
          });
        return ( socket) => {
            window.clearInterval(intervalId);
           
            if (socket) {
                socket.close();
              }
              console.log("websocket closed and interval stopped")
        }

    },[])
  return (
    <div>
       
      
        <video ref={videoRef}  style={{borderRadius : "10px", display: 'none'} }>
        </video>
        <canvas
            p="20px"
            ref={canvasRef}
            style={{borderRadius : "20px" }}
        >

        </canvas>
        
    </div>
  )
}

export default WebCam