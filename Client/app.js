
//GET
function LoadPdfFromUrl(){
    axios.get("http://localhost:3000/auth/Load-PDF-File", {responseType : 'blob'}).then((response) =>{
        const pdfFile = "example.pdf";
        var blob = new Blob([response.data], {
            type: 'application/pdf',
            title: pdfFile,
          });
        //   saveAs(blob, pdfFile);
        const blobUrl = window.URL.createObjectURL(blob);
        document.getElementById("pdf_container").src=blobUrl;
    })

}


//POST
async function SaveFromURL() {
    const iframe = document.getElementById('pdf_container');
    const blobUrl = iframe.src;
    let blob = await fetch(blobUrl).then((response) => response.blob());
    axios.post('http://localhost:3000/auth/Save-PDF-File',blob,{
        headers: {
          'Content-Type': 'application/pdf'}
        });
  }


