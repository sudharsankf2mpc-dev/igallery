const gallery = [
    { src: "zoo1.jpeg", caption: "zootopia 1##" },
    { src: "zoo2.jpeg", caption: "zootopia 2##" },
    { src: "zoo3.jpeg", caption: "zootopia 3##" },
    { src: "zoo4.jpeg", caption: "zootopia 4##" },
];
let index = 0;
function changeImage(type) {
    if (type === "next") 
    {
        index++;
        if(index >= gallery.length)
        {
            index = 0;
        }
    }
    if (type === "prev") 
    {
        index--;
        if(index < 0)
        {
            index = gallery.length - 1;
        }
    }
    document.getElementById("Image").src = gallery[index].src;
    document.getElementById("Text").innerText = gallery[index].caption;
}