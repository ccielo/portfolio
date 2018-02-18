export const styles = {
  backdropStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalStyles: {
    backgroundColor: 'white',
    width: 304,
    height: 500,
    margin: '0 auto',
    boxShadow: `0 14px 8px 0 rgba(0,0,0,0.08), 0 9px 16px 4px rgba(0,0,0,0.12)`,
  },
  closeButton: {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 20,
      marginRight: 20,
    },
    border: {
      border: `1px solid #333333`,
      padding: 12,
    },
  },
} as React.CSSProperties;