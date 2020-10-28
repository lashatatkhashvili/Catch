// import React, { Component } from 'react'
// import {getFunName} from '../helpers'

// export default class Store extends Component {
//     goToStore = (e) => {
//         e.preventDefault();
//         const storeName = e.target[0].value;
//         this.props.history.push(`/store/${storeName}`)
//     }

    
//     render() {
//         return (
//             <>
//               <form className="store-selector" onSubmit={this.goToStore}>
//                <h2> Please enter a Store</h2>
//                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}  />
//                <button type="submit" >Visit Store ➜ </button>
//               </form>  
//             </>
//         )
//     }
// }

import React from 'react'
import {getFunName} from '../helpers'

export default function Store(props) {
    
    const goToStore = e => {
        e.preventDefault();
        const storeName = e.target[0].value;
        props.history.push(`/store/${storeName}`)
    }
    
    return (
        <>
          <form className="store-selector" onSubmit={goToStore}>
            <h2>Please enter a Store</h2> 
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()}  />  
            <button type="submit" >Visit Store ➜ </button> 
          </form>  
        </>
    )
}
 