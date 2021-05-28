import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
const Homepage = ({history}) => (
<div className= 'Homepage'>
<Directory history={history}></Directory>
</div>
)

export default Homepage