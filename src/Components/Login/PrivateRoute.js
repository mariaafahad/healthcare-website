// import React, { useAuth } from 'react';
// import { Redirect, Route } from 'react-router';

// function PrivateRoute({ children, ...rest }) {

//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 user.length > 0 ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }
// export default PrivateRoute;