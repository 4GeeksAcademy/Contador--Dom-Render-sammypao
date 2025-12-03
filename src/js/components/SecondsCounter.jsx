export default function SecondsCounter({seconds}) {

    //Hacer la logica para separar el numero en caracteres unitarios, si es 60 un 6 y un 0

    const secondsString = seconds.toString().padStart(6, '0');
    const digits = secondsString.split('');

  return(
    <div className="container-fluid bg-dark py-5">
      <div className="d-flex justify-content-center gap-2">
        
        
        <div className="bg-dark text-white rounded p-3 d-flex align-items-center justify-content-center" 
             style={{width: '80px', height: '100px', fontSize: '3rem', fontFamily: 'Courier New, monospace'}}>
          <i className="far fa-clock"></i>
        </div>
        
        
        {digits.map((digit, index) => (
          <div 
            key={index}
            className="bg-dark text-white rounded p-3 d-flex align-items-center justify-content-center" 
            style={{width: '80px', height: '100px', fontSize: '3.5rem', fontWeight: 'bold'}}
          >
            {digit}
          </div>
        ))}
        
      </div>
    </div>
  )

}