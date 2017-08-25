import { Component, OnInit } from '@angular/core';

declare var jsPDF: any; // Important



@Component({
  selector: 'nab-sale-document-footer',
  templateUrl: './sale-document-footer.component.html',
  styles: []
})
export class SaleDocumentFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emit(): void {
    const columns = [
      { title: '#', dataKey: 'item' },
      { title: 'Codigo', dataKey: 'code' },
      { title: 'Descripcion', dataKey: 'description' },
      { title: 'Precio', dataKey: 'price' },
      { title: 'Cantidad', dataKey: 'quantity' },
      { title: 'Importe', dataKey: 'import' }
    ];

    const rows = [
      {
        'item': 1, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 2, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 3, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 4, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 5, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 6, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 7, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 8, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 9, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 10, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 11, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      },
      {
        'item': 12, 'code': 'AA1', 'description': 'Aire acondicioado Samsung 3500 W x', 'price': '12.5',
        'quantity': '1', 'import': '12.5'
      }

    ];

    const columns2 = [
      { title: 'subtotal', dataKey: 't' },
      { title: ' $ 255', dataKey: 'v' }
    ];

    const rows2 = [
      { 't': 'iva', 'v': ' $ 200' },
      { 't': 'total', 'v': ' $ 455' }
    ];

    const doc = new jsPDF();

    // doc.autoPrint();
    doc.myText('Presupuesto', { align: 'center' }, 0, 20);
    doc.myText('Numero', { align: 'center' }, 0, 27);
    doc.myText('5487', { align: 'center' }, 0, 33);


    // doc.setDrawColor(255, 255, 0); // draw red lines

    // doc.setLineWidth(0.5);

    // doc.line(0, 35, 1600, 35);

    doc.autoTable(columns, rows, {
      // styles: { fillColor: [100, 255, 255] },
      columnStyles: {
        item: { fillColor: 255 }
      },
      margin: { top: 40 },
      addPageContent: function (data) {

      }
    });

    let marginTop = 40;

    // recorrer rows y calcular marginTop
    for (let i = 0; i < rows.length; i = i + 1) {
      marginTop = marginTop + 10;
    }
    // totals
    doc.autoTable(columns2, rows2, {
      margin: { top: marginTop, left: 155 }
    });


    doc.save('pre.pdf');
  }

}







(function (API) {
  API.myText = function (txt, options, x, y) {
    options = options || {};
    /* Use the options align property to specify desired text alignment
     * Param x will be ignored if desired text alignment is 'center'.
     * Usage of options can easily extend the function to apply different text 
     * styles and sizes
    */
    if (options.align === 'center') {
      // Get current font size
      const fontSize = this.internal.getFontSize();

      // Get page width
      const pageWidth = this.internal.pageSize.width;

      // Get the actual text's width
      /* You multiply the unit width of your string by your font size and divide
       * by the internal scale factor. The division is necessary
       * for the case where you use units other than 'pt' in the constructor
       * of jsPDF.
      */
      const txtWidth = this.getStringUnitWidth(txt) * fontSize / this.internal.scaleFactor;

      // Calculate text's x coordinate
      x = (pageWidth - txtWidth) / 2;
    }

    // Draw text at x,y
    this.text(txt, x, y);
  };
})(jsPDF.API);

