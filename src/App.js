import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentSum, setCurrentSum] = useState(0);
  const [currentMultiple , setCurrentMultiple] = useState(0);
  const [currentCrystalPar, setCurrentCrystalPar] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector('#result1').value = "";
    document.querySelector('#result2').value = "";
  }, [])

  useEffect(() => {
    if (clear)
      document.querySelector('#result1').value = "";
      document.querySelector('#result2').value = "";
  })

  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum1 = parseInt(document.querySelector('#num1').value)
    let currentNum2 = parseInt(document.querySelector('#num2').value)
    let currentNum3 = parseInt(document.querySelector('#num3').value)
    if (currentNum1 == '' || currentNum2 == '' || currentNum3 == '')
      return;
    let sum = currentNum1 - currentNum2;
    let multiple = sum * currentNum3;
    let crystalPar = (currentNum1 * currentNum3) - multiple;
    setCurrentSum(sum);
    setCurrentMultiple(multiple);
    setCurrentCrystalPar(crystalPar);
  }

  const Clear = (e) => {
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
    setCurrentMultiple(0);
    setCurrentCrystalPar(0);
  }

  return (
    <div className="App">
      <Container style={{maxWidth: 700}}>
        <div className="app-title">
          <h2>Nekoma Endless Tower Exchange Calculator</h2>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="num1">
            <Form.Label>Jumlah item yang di inginkan</Form.Label>
            <Form.Control onChange={Add} placeholder="Input jumlah" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="num2">
            <Form.Label>Jumlah item di inventory</Form.Label>
            <Form.Control onChange={Add} placeholder="Input jumlah" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="num3">
            <Form.Label>Harga di exchange</Form.Label>
            <Form.Control onChange={Add} placeholder="Input harga di exchange" />
          </Form.Group>
          
        </Form>
        <div style={{textAlign: 'center'}}>
          <div className="mb-3" id="result1">Kamu kurang <strong>{currentSum} Item</strong></div>
          <div className="mb-3" id="result2">Kamu butuh <strong>{currentMultiple} Crystal</strong></div>
          <div className="mb-3" id="result3">Kamu menghemat <strong>{currentCrystalPar} Crystal</strong></div>
          <Button onClick={Clear}>Clear</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;