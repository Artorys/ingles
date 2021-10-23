const video = window.document.getElementById("video")
const paivideo = window.document.getElementById("paivideo")
const botao = window.document.getElementById("youtube")
function clika()
{
    botao.classList.toggle("on")
    if(botao.classList.contains("on"))
    {
        video.style.display = "inline-block"
        video.style.alignItems = "center"
        paivideo.appendChild(video) 
    }
    else
    {
        video.style.display = "none"
        paivideo.removeChild(video)
    }
}