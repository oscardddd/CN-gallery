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
	console.log(process.env.DEV)
	const result = await axios.post('http://localhost:4000/user/upload', formData,)
	 
	// const result = await axios.post('http://ec2-54-147-169-3.compute-1.amazonaws.com:4000/user/upload', formData,)
	 

	// console.log(result.data)
	return result.data
}

function Uplaod() {

	const [file, setFile] = useState()
	const [description, setDescription] = useState("")
	const [image, setImage] = useState([])
	const [success, setSuccess] = useState(false)
  
	const submit = async event => {
	  event.preventDefault()
	  const result = await postImage({image: file, description})
	  console.log("result: ", result)
	  if(result[0]){
		setSuccess(true)
		setImage(result[1])
	  }
	}
  
	const fileSelected = event => {
	  const file = event.target.files[0]
	  setFile(file)
	}
  
	return (
		
  		<div className={styles.App}>
			<div className='submitted'  style={{display: success?'block':"none"} }>
				<div>Successfully submitted image</div>
				<img className='object-contain h-48 w-96 ...' src={image}></img>

			</div>

			<form className={`${styles.test}`} onSubmit={submit}>
				<input onChange={fileSelected} type="file" accept="image/*"></input>
				<input value={description} placeholder='Any comments?' onChange={e => setDescription(e.target.value)} type="text"></input>
				<button className={styles.button} type="submit">Submit</button>
			</form>
			{/* <img src='http://ec2-54-147-169-3.compute-1.amazonaws.com:4000/user/image/ac969f69860087d306f367b5ce9182d7'></img> */}
	
			{/* { images.map( image => (
			<div key={image}>
				<img src={image}></img>
			</div>
			))} */}
  
	  	</div>
		
	
	);
  }

export default Uplaod