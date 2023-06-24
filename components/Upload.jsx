import { useState } from 'react';
import styles from './upload.module.css'
import axios from 'axios'


async function postImage({image, description}) {
	const formData = new FormData();
	formData.append("image", image)
	formData.append("description", description)
  
	// const result = await fetch('http://localhost:4000/user/upload',
	// {
	// 	method:'post',
	// 	body:formData,
	// 	// headers:{'Content-Type': 'multipart/form-data'},
	// })
	const result = await axios.post('http://localhost:4000/user/upload', formData,
	 )

	console.log(result.data)
	return result.data
}

function Uplaod() {

	const [file, setFile] = useState()
	const [description, setDescription] = useState("")
	const [images, setImages] = useState([])
  
	const submit = async event => {
	  event.preventDefault()
	  const result = await postImage({image: file, description})
	  setImages([result.image, ...images])
	}
  
	const fileSelected = event => {
	  const file = event.target.files[0]
	  setFile(file)
	}
  
	return (
		
  		<div className={styles.App}>
			<form className={`${styles.test}`} onSubmit={submit}>
				<input onChange={fileSelected} type="file" accept="image/*"></input>
				<input value={description} placeholder='Any comments?' onChange={e => setDescription(e.target.value)} type="text"></input>
				<button className={styles.button} type="submit">Submit</button>
			</form>
			<img src='https://collecto-3d6a0fe8a0fd.herokuapp.com/user/image/ac969f69860087d306f367b5ce9182d7'></img>
	
			{/* { images.map( image => (
			<div key={image}>
				<img src={image}></img>
			</div>
			))} */}
  
	  	</div>
		
	
	);
  }

export default Uplaod