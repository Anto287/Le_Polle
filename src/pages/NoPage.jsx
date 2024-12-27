import React from 'react';

const NoPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the No Page</h1>
      <p style={styles.text}>
        Nessuna pagina con questo nome
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    color: '#333',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    textAlign: 'center',
    maxWidth: '600px',
  },
};

export default NoPage;