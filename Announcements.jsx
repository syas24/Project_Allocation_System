import React from 'react'
import './Studentpage.css'

const Announcements = () => {
  return (
    <div>
      <div className='Navbar'>
     <img src="https://thumbs.dreamstime.com/z/letter-sdc-simple-monogram-logo-icon-design-initial-logo-vector-illustration-letter-sdc-simple-monogram-logo-icon-design-214867909.jpg"/>
        <ul className='Navbar'>
            <li>Students List</li>
            <li>Faculty List</li>
            <li>Admin List</li>
            <li>Add Faculty</li>
            <li>Add Admin</li>
            <li>View Announcement</li>
            <li>Teachers leave</li>
            <li>Logout</li>
        </ul>
        <img src="https://th.bing.com/th?id=OIP.GJbxtjY2Wm7Z7xj1uW_avAHaHP&w=252&h=247&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" className='mode'/>
      <img src="https://th.bing.com/th?id=OIP.IhzGAedO4YK04XAgQ0E13gAAAA&w=335&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" className='mode'/>
      </div>
      <h1>Announcements</h1>
      <button type='button' id='b'>Add Announcement</button>
      <table>
        <tr>
            <th>S.NO</th>
            <th>Type</th>
            <th width="700px">Announcement</th>
            <th>Added By</th>
            <th>Remove</th>
        </tr>
      </table>
    </div>
  )
}

export default Announcements
