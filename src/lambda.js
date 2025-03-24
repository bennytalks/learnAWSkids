
///this is the lambda//
const PDFDocument = require('pdfkit');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
  const { name, score } = event;
  const doc = new PDFDocument({ size: 'A4', layout: 'landscape' });
  const buffers = [];

  const fileName = `certificates/certificate-${Date.now()}.pdf`;

  doc.on('data', buffers.push.bind(buffers));

  const pdfPromise = new Promise((resolve, reject) => {
    doc.on('end', async () => {
      const pdfBuffer = Buffer.concat(buffers);
      try {
        await s3.putObject({
          Bucket: 'your-certificate-bucket',
          Key: fileName,
          Body: pdfBuffer,
          ContentType: 'application/pdf',
        }).promise();
        resolve();
      } catch (err) {
        reject(err);
      }
    });

    // Design the PDF
    const date = new Date().toLocaleDateString();
    doc.fillColor('#003366').fontSize(30).text('Certificate of Completion', { align: 'center' });
    doc.moveDown(2);
    doc.fontSize(20).fillColor('#000000').text(`This certifies that`, { align: 'center' });
    doc.moveDown();
    doc.font('Helvetica-Bold').fontSize(32).fillColor('#2E86C1').text(name, { align: 'center' });
    doc.moveDown();
    doc.font('Helvetica').fontSize(18).text(`Has successfully completed the course with a score of ${score}.`, { align: 'center' });
    doc.moveDown(2);
    doc.fontSize(14).text(`Date: ${date}`, { align: 'right', margin: 50 });
    doc.end();
  });

  await pdfPromise;

  const signedUrl = s3.getSignedUrl('getObject', {
    Bucket: 'certificateawskids',
    Key: fileName,
    Expires: 300,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify({ certificateUrl: signedUrl }),
  };
};