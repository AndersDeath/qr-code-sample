


window.addEventListener("load", () => {
    

    // let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    //   scanner.addListener('scan', function (content) {
    //     console.log(content);
    //   });
    //   Instascan.Camera.getCameras().then(function (cameras) {
    //     if (cameras.length > 0) {
    //       scanner.start(cameras[0]);
    //     } else {
    //       console.error('No cameras found.');
    //     }
    //   }).catch(function (e) {
    //     console.error(e);
    //   });




const btn = document.querySelector('.button');
btn.addEventListener('click', () => {
    const userInput = document.querySelector('#userInput');
    if(userInput.value !== '') {
        document.querySelector('.qr-code').innerHTML = '';
        generate(userInput.value);
    } else {
        document.querySelector('.qr-code').style = 'display: none';
        console.log('input is empty');
    }
});

function generate(userInput) {
    const qrCodeEl = document.querySelector('.qr-code');
    qrCodeEl.style = '';
    new QRCode(qrCodeEl, {
        text: `${userInput}`,
        width: 180,
        height: 180,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    let download = document.createElement('button');
    qrCodeEl.appendChild(download);
    let download_link = document.createElement('a');
    download_link.setAttribute('download', 'qr-code.png');
    download_link.innerText = 'Download';
    download.appendChild(download_link);

    const qrCodeImgEl = qrCodeEl.querySelector('img');
    if(qrCodeImgEl.getAttribute('src') === null) {
        download_link.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`)
    } else {
        download_link.setAttribute('href',`${qrCodeImgEl.getAttribute('src')}`)
    }
}
});
