
import {useEffect, useState} from 'react';
import { db } from './firebase.js';
import { auth } from './firebase.js';
import { storage } from './firebase.js';
import firebase from 'firebase/compat/app';
import './App.js';
import './App'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FiSend } from "react-icons/fi";



function Post(props){

    const [comentarios,setComentarios] = useState([]);
    

    useEffect(() => {
        db.collection('posts').doc(props.id).collection('comentarios').orderBy('timestamp','asc').onSnapshot(function(snapshot){
            setComentarios(snapshot.docs.map(function(document){
                return {id:document.id,info:document.data()}
              }))
        })
    }, [])

    function comentar(id, e){
        e.preventDefault();
        
        let comentarioAtual = document.querySelector('#comentario-'+id).value;
        
        
        db.collection('posts').doc(id).collection('comentarios').add({
            nome:props.user,
            comentario: comentarioAtual,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        


        alert('Comentário feito com sucesso!');


        document.querySelector('#comentario-'+id).value = "";

      }

    return (
            <div className="postSingle">
                    <p><b>{props.info.userName}</b></p>
                    <img src={props.info.image} />
                    <div className='postSingleReact'>
                    <AiOutlineHeart size={30} style={{marginRight:"13px",color:"white", cursor:"pointer"}}/>"
                    <BiComment size={30} style={{marginRight:"13px",color:"white", cursor:"pointer"}}/>
                    <FiSend size={30} style={{marginRight:"13px",color:"white", cursor:"pointer"}}/>
                     </div>
                    <p><b>{props.info.userName}</b>: {props.info.titulo}</p>

                    <div className="coments">
                        <h2>Últimos Comentários:</h2>
                        {
                            comentarios.map(function(val){
                                return(
                                    <div className="coment-single">
                                        <p><b>{val.info.nome}</b>: {val.info.comentario}</p>
                                    </div>
                                )
                            })
                        }

                    </div>

                    {
                    (props.user)?
                    <form onSubmit={(e)=>comentar(props.id,e)}>
                        <textarea id={"comentario-"+props.id}></textarea>
                        <input type="submit" value="Comentar!" />
                    </form>
                    :
                    <div></div>
                    }
                </div>
    )

}


export default Post;