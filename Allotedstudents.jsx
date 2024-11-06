import React from 'react'
import './Studentpage.css'

const Allotedstudents = () => {
  return (
    <div>
      <div className='Navbar'>
     <img src="https://thumbs.dreamstime.com/z/letter-sdc-simple-monogram-logo-icon-design-initial-logo-vector-illustration-letter-sdc-simple-monogram-logo-icon-design-214867909.jpg"/>
        <ul className='Navbar'>
            <li>Home</li>
            <li>Accept Requests</li>
            <li>Time Table</li>
            <li>Grades</li>
            <li>Allotted Students</li>
            <li>Logout</li>
        </ul>
        <img src="https://th.bing.com/th?id=OIP.GJbxtjY2Wm7Z7xj1uW_avAHaHP&w=252&h=247&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" className='mode'/>
      <img src="https://th.bing.com/th?id=OIP.IhzGAedO4YK04XAgQ0E13gAAAA&w=335&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" className='mode'/>
      </div>  
      <h1>Allotted Students</h1>
      <table>
        <tr>
            <th>S.NO</th>
            <th>Name of Student</th>
            <th>Reg NO</th>
            <th>Project Title</th>
            <th width='350px'>Proposal</th>
            <th>Mobile NO</th>
            <th>Email-Id</th>
            <th>Date Accepted</th>
            <th>Remove</th>
        </tr>
      </table>
    </div>
  )
}

export default Allotedstudents
