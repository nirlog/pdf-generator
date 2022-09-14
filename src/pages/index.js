import './index.css';
import { langPdf } from "./lang-pdf";
import { jsonPdf } from "./json-pdf";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
let currentDate = new Date();
let formatDate = currentDate.getDate() + '.' + currentDate.getMonth() + '.' + currentDate.getFullYear() + 'г.';
function getProductSashes(){
  let productSashes = [];

  for (let i = 0; i < jsonPdf['products']['productSashes'].length; i++) {
    productSashes.push(
      {
        margin: [0, 0, 0, 3],
        stack:[
          {
            columns: [
              {
                fontSize: 7.6,
                bold: true,
                text: langPdf['sashe'].toUpperCase() + (i+1),
              },
              {
                columns: [
                  {
                    stack:[
                      {
                        fontSize: 5.7,
                        color: '#D9D9D9',
                        text: langPdf['width'].toUpperCase()
                      },
                      {
                        bold: true,
                        text: jsonPdf['products']['productSashes'][i]['width']
                      }
                    ]
                  },
                  {
                    stack:[
                      {
                        fontSize: 5.7,
                        color: '#D9D9D9',
                        text: langPdf['height'].toUpperCase()
                      },
                      {
                        bold: true,
                        text: jsonPdf['products']['productSashes'][i]['height']
                      }
                    ]
                  }
                  
                ]
              }
              
            ]
          },
          {
            fontSize: 5.7,
            stack:[
              {text:[
                langPdf['profileType'].toUpperCase(),
                '   ',
                {text:jsonPdf['products']['productSashes'][i]['profileType'].toUpperCase(), bold: true}
              ]},
              {
                text:[
                  langPdf['profileColor'].toUpperCase(),
                  '   ',
                  {text: jsonPdf['products']['productSashes'][i]['profileColor'].toUpperCase(), bold: true}
                ]
                
              },
              {
                text:[
                  langPdf['model'].toUpperCase(),
                  '   ',
                  {text: jsonPdf['products']['productSashes'][i]['model'].toUpperCase(), bold: true}
                ]
              },
              {
                text:[
                  langPdf['handle'].toUpperCase(),
                  '   ',
                  {text: jsonPdf['products']['productSashes'][i]['handle'].toUpperCase(), bold: true}
                ]
              },
              {
                text:[
                  langPdf['insertion'].toUpperCase(),
                  '   ',
                  {text: jsonPdf['products']['productSashes'][i]['insertion'].toUpperCase(), bold: true}
                ]
              },
              {
                text:[
                  langPdf['doorСloser'].toUpperCase(),
                  '   ',
                  {text: jsonPdf['products']['productSashes'][i]['doorСloser'].toUpperCase(), bold: true}
                ]
              },
            ]
          }
        ]
      }
    );
  }
  return productSashes;
}
function getProductEquipment(){
  let productEquipment = [];

  for (let i = 0; i < jsonPdf['equipment']['guides'].length; i++) {
    if(i == 0){
      productEquipment.push(
        [
          {
            margin: [0, 3],
            colSpan: 3,
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'направляющие'.toUpperCase()
          },
          '',
          '',
          {
            margin: [0, 12],
            rowSpan: 2,
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'Для отметок'
          },
        ],
        [
          {
            margin: [0, 3],
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'НАЗВАНИЕ'.toUpperCase()
          },
          {
            margin: [0, 3],
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'ФОТО'.toUpperCase()
          },
          {
            margin: [0, 3],
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'КОЛИЧЕСТВО'.toUpperCase()
          },
          '',
        ],
      );
    }
    productEquipment.push(
      [
        {
          margin: [0, 3],
          text: jsonPdf['equipment']['guides'][i]['name'],
        },
        {
          fit: [30, 30],
          alignment: 'center',
          image: jsonPdf['equipment']['guides'][i]['image'],
        },
        {
          alignment: 'center',
          margin: [0, 7],
          text: jsonPdf['equipment']['guides'][i]['quantity'],
        },
        {
          text: ''
        }
      ],
    );

  }
  for (let i = 0; i < jsonPdf['equipment']['accessories'].length; i++) {
    if(i == 0){
      productEquipment.push(
        [
          {
            margin: [0, 3],
            colSpan: 3,
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'ФУРНИТУРА'.toUpperCase()
          },
          '',
          '',
          {
            margin: [0, 12],
            rowSpan: 2,
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'Для отметок'
          },
        ],
        [
          {
            margin: [0, 3],
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'НАЗВАНИЕ'.toUpperCase()
          },
          {
            margin: [0, 3],
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'ФОТО'.toUpperCase()
          },
          {
            margin: [0, 3],
            fillColor: '#eeeeee',
            alignment: 'center',
            text: 'КОЛИЧЕСТВО'.toUpperCase()
          },
          '',
        ],
      );
    }
    productEquipment.push(
      [
        {
          margin: [0, 3],
          text: jsonPdf['equipment']['accessories'][i]['name'],
        },
        {
          fit: [30, 30],
          alignment: 'center',
          image: jsonPdf['equipment']['accessories'][i]['image'],
        },
        {
          alignment: 'center',
          margin: [0, 7],
          text: jsonPdf['equipment']['accessories'][i]['quantity'],
        },
        {
          text: ''
        }
      ],
    );

  }
  return productEquipment;
}





let dd = {
  pageSize: 'A4',
  pageMargins: [22, 11, 22, 50],
  footer: function(currentPage, pageCount) {
       return {
        layout: 'lightHorizontalLines',
        fontSize: 11,
        bold: true,
        alignment: 'center',
        table: {
          widths: ['auto','*', 65],

          body: [
            [
              {
                border: [true, true, true, true],
                margin: [22, 11, 0, 0],
                text: formatDate,
                alignment: 'left',
                fontSize: 11,
                bold: true
              },
              {
                margin: [0, 11, 0, 0],
                text: 'СТРАНИЦА ' + currentPage.toString() + ' ИЗ ' + pageCount
              },
              {
                margin: [0, 0, 22, 0],
                border: [true, true, true, true],
                image: 'logo2',
                width: 65,
              },
            ]
          ],
        }
       }
        
      },
 
  
  content: [
    // шапка
    {
      table: {
        widths: [80, '*'],
        body: [
          [{
              border: [false, false, false, true],
              image: 'logo',
              width: 80,
            },
            {
              border: [false, false, false, true],
              margin: [0, 12],
              text: langPdf['title'].toUpperCase(),
              alignment: 'center',
              fontSize: 11,
              bold: true
            }
          ]
        ],
      }
    },
    // шапка

    {
      margin: [0, 7, 0, 0],
      columns: [{
          width: '*',
          margin: [130, 0, 0, 0],
          table: {
            widths: [250],
            headerRows: 3,
            body: [
              [{
                margin: [30, 1, 0, 0],
                border: [true, true, true, false],
                text: langPdf['salonName'].toUpperCase() + langPdf['salonNameValue'].toUpperCase(),
                fontSize: 8,
              }],
              [{
                margin: [30, 0, 0, 0],
                border: [true, false, true, false],
                text: langPdf['salonAddress'].toUpperCase() + langPdf['salonAddressValue'],
                fontSize: 8,
              }],
              [{
                margin: [60, 0, 0, 1],

                border: [true, false, true, true],
                text: langPdf['salonPhone'].toUpperCase() + langPdf['salonPhoneValue'],
                fontSize: 8,

              }]
            ],
          },
        },
        {
          width: 153,
          fontSize: 8,
          alignment: 'right',
          stack: [
            langPdf['validityPeriod'].toUpperCase() + jsonPdf['validityPeriod'],
            {
              text: langPdf['readinessPeriod'].toUpperCase() + jsonPdf['readinessPeriod'],
              margin: [0, 9, 0, 0],
            }

          ]
        }

      ]
    },
    {
      text: langPdf['invoiceSpecification'].toUpperCase() + jsonPdf['invoiceSpecification'].toUpperCase(),
      alignment: 'center',
      fontSize: 15,
      bold: true,
      margin: [0, 16, 0, 18],
    },
    {
      image: 'line',
      width: 300,
      alignment: 'center',
    },
    {
      margin: [0, 18, 0, 18],
      columns: [
        {
          width: '*',
          fontSize: 9,
          stack: [
            {
              text: [
                langPdf['buyerName'].toUpperCase(),
                {
                  bold:true,
                  text: jsonPdf['buyerName'].toUpperCase()
                },
              ]
            },
            {
              text: [
                langPdf['buyerPhone'].toUpperCase(),
                {
                  bold:true,
                  text: jsonPdf['buyerPhone']
                }
              ],
            },
            {
              text: [
                langPdf['buyerAddress'].toUpperCase(),
                {
                  bold:true,
                  text: jsonPdf['buyerAddress'].toUpperCase()
                }
              ],
            }
          ]
        },
        {
          width: 223,
          fontSize: 9,
          stack: [
            {
              text: langPdf['managerName'].toUpperCase() + jsonPdf['managerName'].toUpperCase(),
            },
            {
              text: langPdf['managerPhone'].toUpperCase() + jsonPdf['managerPhone'],
            }
          ]
        }
      ]
    },
    {
      
      table: {
        widths: [20, '*', 90, 90, 40, 60],
        body:
        [
          [
            {fontSize: 9,bold: true,alignment: 'center',text: '№'},
            {fontSize: 9,bold: true,text: langPdf['productColumnName'].toUpperCase()},
            {fontSize: 9,bold: true,alignment: 'center',text: langPdf['productColumnSize']},
            {fontSize: 9,bold: true,alignment: 'center',text: langPdf['productColumnScheme']},
            {fontSize: 9,bold: true,alignment: 'center',text: langPdf['productColumnQuantity']},
            {fontSize: 9,bold: true,alignment: 'center', text: langPdf['productColumnPrice']}
          ],
          [
            {
              margin: [0, 14, 0, 0],
              alignment: 'center',
              text: '1',
            },
            {
      
              stack:[
                {
                  fontSize: 9,
                  bold: true,
                  text: jsonPdf['products']['productName']
                },
                {
                  fontSize: 7.6,
                  bold: true,
                  margin: [0, 14, 0, 0],
                  text: jsonPdf['products']['productDesignation'].toUpperCase() + ' ' + langPdf['note'].toUpperCase() + jsonPdf['products']['productNote'].toUpperCase()
                }
              ]
            },
            {
              border: [true, true, false, true],
              alignment: 'center',
              stack:[
                {
                  fontSize: 9,
                  bold: true,
                  margin: [0, 14, 0, 0],
                  text: jsonPdf['products']['productSize']
                },
                {
                  fontSize: 7.6,
                  bold: true,
                  margin: [0, 8, 0, 14],
                  text: jsonPdf['products']['productSizeNote']
                }
              ]
            },
            {
              border: [false, false, true, true],
              image: jsonPdf['products']['productScheme'],
              width: 82,
            },
            {
              fontSize: 6.7,
              bold: true,
              alignment: 'center',
              margin: [0, 14, 0, 0],
              text: jsonPdf['products']['productQuantity'] + ' ' + langPdf['productColumnQuantityМeasure']
            },
            {
              fontSize: 9,
              bold: true,
              alignment: 'center',
              margin: [0, 14, 0, 0],
              text: jsonPdf['products']['productPrice']
            }
          ]
        ]
      }
    },
    {
      margin: [0, 20, 0, 22],

      columns: [
        {
          width: 350,
          stack:[
            {
              width: 350,
              image: jsonPdf['products']['productDescrioption']['image'],
            },
            {
              width: 350,
              layout: 'noBorders',
              
              table: {
                body: [
                  [
                    {
                      margin: [0, 5, 5, 5],
                      layout: 'noBorders',
                      fontSize: 7,
                      table: {
                        widths: [108],
                        heights: 70,
                        body: [
                          [
                            {
                              fillColor: '#eeeeee',
                              margin: [15, 7],
                              stack: [
                                {
                                  text: langPdf['opening'],
                                  bold: true
                                },
                                {
                                  stack: [
                                    {
                                      text: [langPdf['width'],
                                      {text: jsonPdf['products']['productDescrioption']['opening']['width'] + langPdf['unitOfMeasurement'],}]
                                  },
                                    {
                                      text: [langPdf['height'],
                                      {text: jsonPdf['products']['productDescrioption']['opening']['height'] + langPdf['unitOfMeasurement'],}]
                                  },
                                    {
                                      text: [langPdf['depth'],
                                      {text: jsonPdf['products']['productDescrioption']['opening']['depth'] + langPdf['unitOfMeasurement'],}]
                                  },
                                    {
                                      text: [langPdf['mountingHeight'],
                                      {text: jsonPdf['products']['productDescrioption']['opening']['mountingHeight'] + langPdf['unitOfMeasurement'],}]
                                  }
                                  ]
                                }
                              ],
                            }
                          ]
                        ]
                      }
                      
                    },
                    {
                      margin: [0, 5, 5, 5],
                      layout: 'noBorders',
                      fontSize: 7,
                      table: {
                        widths: [108],
                        heights: 70,
                        body: [
                          [
                            {
                              fillColor: '#eeeeee',
                              margin: [15, 7],
                              stack: [
                                {
                                  text: langPdf['track'],
                                  bold: true
                                },
                                {
                                  stack: [
                                    {text: langPdf['width'] + jsonPdf['products']['productDescrioption']['track']['width'] + langPdf['unitOfMeasurement']},
                                    {text: langPdf['height'] + jsonPdf['products']['productDescrioption']['track']['height'] + langPdf['unitOfMeasurement']},
                                    {text: langPdf['quantity'] + jsonPdf['products']['productDescrioption']['track']['quantity']},
                                    {text: langPdf['color'] + jsonPdf['products']['productDescrioption']['track']['color']},
                                    {bold: true,text: jsonPdf['products']['productDescrioption']['track']['note']}
                                  ]
                                }
                              ],
                            }
                          ]
                        ]
                      }
                      
                    },
                    {
                      margin: [0, 5, 0, 5],
                      layout: 'noBorders',
                      fontSize: 9,
                      table: {
                        widths: [108],
                        heights: 70,
                        body: [
                          [
                            {
                              fillColor: '#eeeeee',
                              margin: [15, 7],
                              stack: [
                                {
                                  text: langPdf['packaging'],
                                  bold: true,
                                },
                                {
                                  stack: [
                                    {
                                      text:[
                                        langPdf['volume'],
                                        {text: langPdf['volume'] + jsonPdf['products']['productDescrioption']['packaging']['volume'] + langPdf['unitOfVolume'], bold: true}
                                      ]
                                    },
                                    {
                                      text:[
                                        langPdf['weight'],
                                        {text: jsonPdf['products']['productDescrioption']['packaging']['weight'] + langPdf['unitOfWeight'], bold: true}
                                      ]
                                    },
                                    {
                                      text:[
                                        langPdf['boxes'],
                                        {text: jsonPdf['products']['productDescrioption']['packaging']['boxes'] + langPdf['unitOfBoxes'], bold: true}
                                      ]
                                    },
                                  ]
                                }
                              ],
                            }
                          ]
                        ]
                      }
                      
                    },
                  ],
                  [
                    {
                      margin: 0,
                      layout: 'noBorders',
                      fillColor: '#eeeeee',
                      colSpan: 3,
                      table: {
                        body: [
                          [
                            {
                              columns: [
                                {
                                  width: 250,
                                  margin: [17, 7],
                                  fontSize: 9,
                                  stack: [
                                  {text: langPdf['note']},
                                  {text: jsonPdf['products']['productDesignation'],},
                                  {text: langPdf['viewRecommendations'] + jsonPdf['products']['productNote'],}
                                ]},
                                {
                                  width: 15,
                                  margin: [20, 15],
                                  image: langPdf['iconNote'],
                                }
                              ]
                            }
                          ]
                        ]
                      }
                      
                    },
                  ],
                  [
                    {
                      margin: [5, 0, 0, 0],
                      layout: 'noBorders',
                      colSpan: 3,
                      table: {
                        body: [
                          [
                            {
                              table: {
                                body: [
                                  [
                                    {
                                      fontSize: 8.6,
                                      text: langPdf['agreement_1']
                                    },
                                    {
                                      width: 54,
                                      margin: [7, 29, 7, 7],
                                      image: 'line'
                                    }
                                  ]
                                ]
                              }
                            }
                          ]
                        ]
                      }
                      
                    },
                  ],
                  [
                    {
                      margin: [5, 0, 0, 0],
                      layout: 'noBorders',
                      colSpan: 3,
                      table: {
                        body: [
                          [
                            {
                              table: {
                                body: [
                                  [
                                    {
                                      fontSize: 8.6,
                                      text: langPdf['agreement_2']
                                    },
                                    {
                                      width: 54,
                                      margin: [7, 29, 7, 7],
                                      image: 'line'
                                    }
                                  ]
                                ]
                              }
                            }
                          ]
                        ]
                      }
                      
                    },
                  ]
                ]
              }
            },
          ],
        },
        {
          width: 150,
          margin: [20, 0, 0, 0],
          stack:[
            getProductSashes()
          ]
          
          
        }
      ]
    },
    // шапка 2
    {
      pageBreak: 'before',
      table: {
        widths: [80, '*', 80],
        body: [
          [{
              border: [false, false, false, true],
              image: 'logo',
              width: 80,
            },
            {
              border: [false, false, false, true],
              margin: [0, 12],
              text: langPdf['title2'].toUpperCase(),
              alignment: 'center',
              fontSize: 11,
              bold: true
            },
            {
              border: [false, false, false, true],
              alignment: 'center',
              image: 'note',
              width: 26,
            }
          ]
        ],
      }
    },
    
    // шапка 2
    {
      fontSize: 11,
      bold: true,
      stack: [
        {
          margin: [0, 13, 0, 0],
          text: langPdf['technicalRequirements']
        },
        {
          margin: [0, 11, 0, 0],
          text: langPdf['buyerName'].toUpperCase() + jsonPdf['buyerName']
        },
        {text: langPdf['addressObject'].toUpperCase() + jsonPdf['buyerAddress']},
      ]
    },
    {
      layout: 'noBorders',
      margin: [0, 29, 0, 0],
      table: {
        body: [
          [
            {alignment: 'center', text: langPdf['mountingOpening']},
            {alignment: 'center', text: langPdf['locationMortgage']},
            {alignment: 'center', text: langPdf['verticalSection']}
          ],
          [
            {
              width: 105,
              margin: [0, 15, 0, 0],
              image: jsonPdf['mountingOpening']
            },
            {
              width: 217,
              margin: [0, 15, 0, 0],
              image: jsonPdf['locationMortgage']
            },
            {
              width: 190,
              margin: [0, -15, 0, 0],
              image: jsonPdf['verticalSection']
            }
          ]
        ]
      }
    },
    {
      fontSize: 7,
      stack: [
        {text: langPdf['forEmbeddedBeam']},
        {text: langPdf['ifProhibited']}
      ]
      
    },
    {
      margin: [0, 18, 0, 0],
      table: {
        body: [
          [
            {
              text: langPdf['tableOfOpeningsDesignation'],
              margin: 5,
              fontSize: 7.6,
              alignment: 'center',
            },
            {
              text: langPdf['tableOfOpeningsConstruction'],
              margin: 5,
              fontSize: 7.6,
              alignment: 'center',
            },
            {
              text: langPdf['tableOfOpeningsScheme'],
              margin: 5,
              fontSize: 7.6,
              alignment: 'center',
            },
            {
              text: langPdf['tableOfOpeningsOpening'],
              margin: 5,
              fontSize: 7.6,
              alignment: 'center',
            },
            {
              text: langPdf['tableOfOpeningsWall'],
              margin: 5,
              fontSize: 7.6,
              alignment: 'center',
            },
            {
              text: langPdf['tableOfOpeningsCeiling'],
              margin: 5,
              fontSize: 7.6,
              alignment: 'center',
            },
          ],
          [
            {
              margin: 5,
              fontSize: 9,
              alignment: 'center',
              text: jsonPdf['tableOfOpeningsDesignation']
            },
            {
              margin: 5,
              fontSize: 9,
              alignment: 'center',
              text: jsonPdf['tableOfOpeningsConstruction'].toUpperCase()
            },
            {
              margin: 5,
              alignment: 'center',
              width: 134,
              image: jsonPdf['tableOfOpeningsScheme'],
            },
            {
              margin: 5,
              fontSize: 9,
              alignment: 'center',
              text: jsonPdf['tableOfOpeningsOpening']
            },
            {
              margin: 5,
              fontSize: 9,
              alignment: 'center',
              text: jsonPdf['tableOfOpeningsWall']
            },
            {
              margin: 5,
              fontSize: 9,
              alignment: 'center',
              text: jsonPdf['tableOfOpeningsCeiling']
            },
          ]

        ]
      }
    },
    {
      margin: [0, 5],

      text: langPdf['signingRequirements'],
    },
    {
      margin: [0, 86, 0, 0],
      fontSize: 9,
      columns: [
        {
          text: langPdf['signature2'] + jsonPdf['buyerName'].toUpperCase()
        },
        {
          alignment: 'right',
          text: langPdf['signature2'] + jsonPdf['managerName'].toUpperCase()
        }
      ]
    },
    // шапка 3
    {
      pageBreak: 'before',
      table: {
        widths: [80, '*', 80],
        body: [
          [{
              border: [false, false, false, true],
              image: 'logo',
              width: 80,
            },
            {
              border: [false, false, false, true],
              margin: [0, 12],
              text: langPdf['title3'].toUpperCase(),
              alignment: 'center',
              fontSize: 11,
              bold: true
            },
            {
              border: [false, false, false, true],
              alignment: 'center',
              stack:[
                {
                  image: 'note',
                  width: 26,
                },
                {
                  fontSize: 9,
                  text: langPdf['site'].toUpperCase(),
                }
              ]
              
              
            }
          ]
        ],
      }
    },
    // шапка 3
    {

    },
    {
      stack: [
        {
          alignment: 'center',
          fontSize: 9,
          bold: true,
          text: langPdf['memoAccount'] + jsonPdf['invoiceSpecification']
        },
        {
          alignment: 'center',
          fontSize: 9,
          bold: true,
          margin: [0, 9, 0, 0],
          text: langPdf['construction'] + jsonPdf['construction']
        }
      ]
    },
    {
      margin: [0, 9, 0, 0],
      columns: [
        {
          width: 310,
          stack: [
            {
              alignment: 'center',
              fontSize: 9,
              bold: true,
              text: langPdf['productDrawing']
            },
            {
              width: 310,
              image: jsonPdf['item']['plan']
            },
          ]
        },
        {
          width: 232,
          margin: [9, 0, 0, 0],
          stack: [
            {
              alignment: 'center',
              fontSize: 9,
              bold: true,
              text: lang['trackSize']

            },
            {
              alignment: 'center',
              fontSize: 27,
              bold: true,
              text: jsonPdf['item']['trackSize']},
            {
              width: 232,
              image: jsonPdf['item']['track'],
            },
            {
              fontSize: 9,
              bold: true,
              margin: [0, 46, 0, 0],
              table: {
                body: [
                  [
                    {
                      width: 232,
                      margin: [6, 6, 6, 10],
                      border: [false, false, false, false],
							        fillColor: '#eeeeee',
                      stack: [
                        {text: langPdf['note']},
                        {
                          margin: [0, 6, 0, 0],
                          text: jsonPdf['item']['note']
                        }
                      ]
                    }
                  ]
                ]
              }
              
            },

          ]
        }
      ]
    },
    {
      fontSize: 9,
      bold: true,
      margin: [0, 7, 0, 0],
      text: 'комплектация'.toUpperCase(),
    },
    {
      fontSize: 8,
      bold: true,
      margin: [0, 7, 0, 0],
      
      table: {
        widths: ['*', 113, 113, 113],
        body: getProductEquipment()
      }
    },
    {
      fontSize: 8,
      bold: true,
      margin: [0, 8, 0, 0],
      text: langPdf['qualityClaims']
    },
    {
      columns: [
        {
          width: 55,
          margin: [0, 8, 0, 0],
          image: langPdf['qrcode']
        },
        {
          fontSize: 8,
          bold: true,
          alignment: 'right',
          margin: [0, 20, 0, 0],
          text: langPdf['signature1'] + jsonPdf['buyerName']
        }
      ]
      
    }

  ],
  images: {
    logo: langPdf['logo'],
    logo2: langPdf['logo2'],
    note: langPdf['iconNote'],
    line: langPdf['line'],
  },
}



document.addEventListener("DOMContentLoaded", ready);

function ready() {
  pdfMake.createPdf(dd).open();
  const downloadPdf = document.querySelector('.download-pdf');
  const openPdf = document.querySelector('.open-pdf');
  const printPdf = document.querySelector('.print-pdf');
  downloadPdf.addEventListener('click', () => {
    pdfMake.createPdf(dd).download();
  });

  openPdf.addEventListener('click', () => {
    pdfMake.createPdf(dd).open();
  });

  printPdf.addEventListener('click', () => {
    pdfMake.createPdf(dd).print();
  });
}
