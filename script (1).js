const api ="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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const getImage = async () => {
    const method = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    };

        try {
        const res = await fetch("https://api.openai.com/v1/images/generations", method);
        const data = await res.json();

        // Clear previous images
        console.log(data);
        images.innerHTML = '';

        const listImages = data.data; // Assuming the structure is { "data": { "images": [...] } }
        listImages.forEach(photo => {
            const container = document.createElement("div");
            images.append(container);
            const img = document.createElement("img");
            container.append(img);
            img.src = photo.url;
        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};


