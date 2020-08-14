const videoElement = document.getElementById ('video');
const button = document.getElementById('button');


async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play ();

        }
    }catch (err) {
        console.log ('selectMediaStream', err)
    }
}

button.addEventListener ('click', async() =>{

button.disable = true;

await videoElement.requestPictureInPicture();

button.disable = false;
});
selectMediaStream ();