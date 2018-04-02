const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginLeft: '24px',
    marginRight: '24px',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: '20px',
    paddingBottom: '20px',
    borderBottom: `1px solid #e6e6e6`,
    marginBottom: '10px',
  },
  userId: {
    fontWeight: 600,
    fontSize: 15,
    padding: 0,
    margin: 0,
  },
  basicText: {
    fontSize: 15,
    padding: 0,
    margin: 0,
  },
  modalStyles: {
    width: '793px',
    height: '573px',
  },
  contentContainer: {
    height: '307px',
    paddingTop: '12px',
    paddingBottom: '12px',
    borderBottom: `1px solid #e6e6e6`,
    marginBottom: '10px',
  },
  commentBox: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 18,
    alignItems: 'center',
  },
  commentsInfo: {
    flex: 0.95,
    paddingTop: '5px',
    paddingBottom: '5px',
    flexDirection: 'row',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
  borderBottomLine: {
    paddingTop: '8px',
    paddingBottom: '8px',
    borderBottom: `1px solid #e6e6e6`,
    marginBottom: '10px',
  },
  iconListContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
} as React.CSSProperties;

export default styles;