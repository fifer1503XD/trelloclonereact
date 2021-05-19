import React, {useRef}from 'react';

const PostList = () => {
    const refName = useRef('');
    const mysubmit=(event)=>{
        event.preventDefault();
      } 
    return ( 
    <div>
        <form noValidate onSubmit={mysubmit}>
        <div class="form-group">
            <label for="Name">Name</label>
            <input ref={refName} type="text" class="form-control" id="name" placeholder="BOARD NAME"/>
        </div>
        <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
    </div> );
}
 
export default PostList