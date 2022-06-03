import Logo from './../../assets/img/logoMega.png';


export function NotFound() {

    const styles = { 
                  padding: "1rem", 
                  height: "calc(100vh - 10rem)",
                  maxWidth: "100vw",
                  width: "100%",
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
    };

    return (
        <main style={styles}>
                  <img alt="Mega Logo" style={{ height: "200px" }} src={Logo} />
                  <p 
                    style={{
                        fontSize: "3rem"
                    }}>
                    We are working on this page!
                  </p>
                </main>
    );

}