import './style.css';

const LogIn = ({logInFunc, logOutFunc}) => {
	return (
		<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <button onClick={logInFunc}>Log in</button>
						<button onClick={logOutFunc}>Log out</button>
          </div>
        </div>
      </div>
    </div>
	)
}

export default LogIn;