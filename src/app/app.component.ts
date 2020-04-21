import { Component, ViewChild, ElementRef } from '@angular/core';
import { drawDOM, exportPDF, Group } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generate-pdf-doc';
  @ViewChild('reportContent') content: ElementRef;

  downloadPdf() {
    const element = document.getElementById('reportContent');
    drawDOM(element, {
      paperSize: 'auto',
      margin: { left: '0cm', top: '0cm', right: '0cm', bottom: '0cm' }
    }).then((group: Group) => {
      return exportPDF(group, {
        paperSize: 'auto',
        multiPage: false,
        margin: { left: '0cm', top: '0cm', right: '0cm', bottom: '0cm' }
      });
    }).then((data) => {
      saveAs(data, 'Report ' + 2 + ' ' + 2020 + '.pdf');
    });
  }
}
