// import React from 'react'

// const UserProfileForm = () => {
//   return (
//     <div>UserProfileForm</div>
//   )
// }

// export default UserProfileForm

import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: 'red',
  },
};

function MyComponent(props: any) {
  return <div className={props.classes.root}>TEST</div>;
}

export default withStyles(styles)(MyComponent);
