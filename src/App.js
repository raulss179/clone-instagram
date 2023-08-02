import './App.css'; 
import {db} from './firebase.js';
import { auth } from './firebase.js';
import './Header.js';
import {useEffect, useState, useTransition} from 'react';
import Header from './Header';
import './Header.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';
import Post from './Post';
import React from 'react'




function App() {

  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    auth.onAuthStateChanged(function(val){
        if(val!=null){
        setUser(val.displayName);
        }
    })
  
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(function(snapshot){
        setPosts(snapshot.docs.map(function(document){
          return {id:document.id, info:document.data()}
        }))
    })

},[])




return (
  <div className="App">
    
    <Header setUser={setUser} user={user}></Header>

    {
      posts.map(function(val){

          return (
            
              <Post user={user} info={val.info} id={val.id} />
              
            
          )

      })
    }
    
  </div>
);
}

export default App;
