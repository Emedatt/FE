import React from 'react'
import Header from './Header';
import SearchBar from './SearchBar';
import Upcoming from './Upcoming';
import AvailableDoctors from './AvailableDoctors';
import Menu from './Menu';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <Header />
        <SearchBar />
        <main className="mt-8">
          <Upcoming />
          <AvailableDoctors />
        </main>
        {/* <Menu/> */}
      </div>
  )
}

export default Profile