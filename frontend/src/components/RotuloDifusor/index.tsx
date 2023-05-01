import './styles.css';
import ReactDOM from 'react-dom';
import { PDFViewer, Text, Document, Page, StyleSheet, Image } from '@react-pdf/renderer';
import { useState } from 'react';


const RotuloDifusor = () => {

  const [nomeDifusor, setNomeDifusor] = useState('');
  const [descricaoDifusor, setDescricaoDifusor] = useState('');

  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: '1mm', // add some padding around the content
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titulo: {
      fontSize: '10pt',
      fontWeight: 'bold',
      color: 'black',
      width: '5cm',
      textAlign: 'center',
      margin: '0 auto',
      marginBottom: '1mm', // add some space between the text and image
    },
    descricao: {
      fontSize: '8pt',
      color: 'black',
      width: '5cm',
      textAlign: 'center',
      margin: '0 auto',
      marginBottom: '1mm', // add some space between the text and image
    },
    image: {
      width: "2cm",
      height: "2cm",
      margin: '0 auto',
      objectFit: "contain",
    },
  });

  function MyPdfDocument() {
    return (
      <Document>
        <Page size={{ width: '5.5cm', height: '4.5cm' }} style={styles.page}>
          <Text style={styles.titulo}>{nomeDifusor}</Text>
          <Text style={styles.descricao}>{descricaoDifusor}</Text>
          <Image src={require('../../assets/images/logo-rotulo.png')} style={styles.image} />
        </Page>
      </Document>
    );
  }

  function PrintToPdfButton() {
    const handlePrintClick = () => {
      const pdfWindow = window.open();
      if (pdfWindow) {
        pdfWindow.document.body.innerHTML = '<div id="pdf-container"></div>';
        ReactDOM.render(
          <PDFViewer>
            <MyPdfDocument />
          </PDFViewer>,
          pdfWindow.document.getElementById('pdf-container')
        );
      } else {
        console.error('Failed to open PDF window');
      }
    };

    return (
      <button className="btn btn-primary" onClick={handlePrintClick}>Print to PDF</button>
    );
  }

  return (
    <div>
      <form className="form-group">
        <label htmlFor="nomeDifusor">Nome:</label>
        <input className="form-control base-input" type="text" id="nomeDifusor" value={nomeDifusor} onChange={(e) => setNomeDifusor(e.target.value)} />
        <label htmlFor="descricaoDifusor">Descrição:</label>
        <input className="form-control base-input" type="text" id="text2" value={descricaoDifusor} onChange={(e) => setDescricaoDifusor(e.target.value)} />
      </form>
      <PrintToPdfButton />
    </div>
  );
};

export default RotuloDifusor;