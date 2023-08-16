import { Injectable } from "@nestjs/common";
import * as pdfjsLib from "pdfjs-dist";


@Injectable({})
export class DatabaseService{
    // readonly fs = require('fs');
    // readonly pdfParse = require('pdf-parse')
    // readonly getPDF = async (file) => {
    // let readFileSync = this.fs.readFileSync(file)
    // try {
    //     let pdfExtract = await this.pdfParse(readFileSync)
    //     console.log('File content: ', pdfExtract.text)
    //     console.log('Total pages: ', pdfExtract.numpages)
    //     console.log('All content: ', pdfExtract.info)
    // } catch (error) {
    //     throw new Error(error)
    // }
    // }
    
    readonly getPDF = (async (file) => {
    const loadingTask = pdfjsLib.getDocument(file);
    const pdf = await loadingTask.promise;
    // console.log(loadingTask)

    // // Load information from the first page.
    const page = await pdf.getPage(1);
    console.log(page)

    // const scale = 1;
    // const viewport = page.getViewport({ scale });
    // console.log('View Port:',viewport)

    // // Apply page dimensions to the `<canvas>` element.
    // const canvas = document.getElementById("pdf") as HTMLCanvasElement;
    // const context = canvas.getContext("2d");
    // canvas.height = viewport.height;
    // canvas.width = viewport.width;

    // // Render the page into the `<canvas>` element.
    // const renderContext = {
    //     canvasContext: context,
    //     viewport: viewport,
    // };
    // await page.render(renderContext);
    // console.log("Page rendered!");
    });
    
}