import { Injectable } from '@angular/core';
import { ProfileListings } from './profile-listings';
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  protected profileLists:ProfileListings[] =[{
    id: 0,
      name: 'Anusha',
      age: 25,
      height: '5ft 2in',
      language: 'Tamil',
      caste: 'Nair',
      education: 'MBBS',
      profession: 'Doctor',
      city: 'Chennai',
      state: 'TamilNadu',
      country: 'India',
      photo: '/assets/profile1.jpg'
  },
  {
    id: 1,
    name: 'Regina',
    age: 27,
    height: '5ft 5in',
    language: 'Tamil',
    caste: 'AD',
    education: 'BE',
    profession: 'IT',
    city: 'Madurai',
    state: 'TamilNadu',
    country: 'India',
    photo: '/assets/profile2.jpg'
  },
  {
    id: 2,
      name: 'Pooja',
      age: 24,
      height: '4ft 5in',
      language: 'Tamil',
      caste: 'BC',
      education: 'Bsc',
      profession: 'Nurse',
      city: 'Coimbatore',
      state: 'TamilNadu',
      country: 'India',
      photo: '/assets/profile3.jpg'
  },
  {
    id: 3,
      name: 'Janani',
      age: 28,
      height: '5ft 3in',
      language: 'Tamil',
      caste: 'BC',
      education: 'ME',
      profession: 'Civil Engineer',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      photo: '/assets/profile4.jpg'
  },
  {
    id: 4,
      name: 'Swathi',
      age: 25,
      height: '4ft 5in',
      language: 'Kannada',
      caste: 'BC',
      education: 'MBBS',
      profession: 'Doctor',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      photo: '/assets/profile5.jpg'
  },
  {
    id: 5,
      name: 'Priya',
      age: 31,
      height: '5ft 2in',
      language: 'Hindi',
      caste: 'AD',
      education: 'B.COM',
      profession: 'Manager',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      photo: '/assets/profile6.jpg'
  },
  {
    id: 6,
      name: 'Ranjini',
      age: 31,
      height: '5ft 0in',
      language: 'Marathi',
      caste: 'AD',
      education: 'M.COM',
      profession: 'Assitant Manager',
      city: 'Mumbai',
      state: 'Madhya Pradesh',
      country: 'India',
      photo: '/assets/profile7.jpg'
  },
  {
    id: 7,
      name: 'Divya',
      age: 31,
      height: '5ft 6in',
      language: 'Tamil',
      caste: 'BC',
      education: 'ME',
      profession: 'Civil Engineer',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      country: 'India',
      photo: '/assets/profile8.jpg'
  }];
  constructor() { }
  getAllProfiles():ProfileListings[]{
    return this.profileLists;
  }
  getProfileById(id:Number): ProfileListings | undefined{
    return this.profileLists.find(ProfileListings=> ProfileListings.id === id)
  }
}
