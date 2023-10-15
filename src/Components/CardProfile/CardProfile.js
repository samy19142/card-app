
import './CardProfile.css'

const CardProfile =({item})=>{

  
    return(
        
        <div className="col-md-6">
          <div className="container-card bg-light" id={item.id}> 
            <div className="img-card">
              <img src={'https://source.unsplash.com/random/?people'} alt="perfil"/>
            </div>

            <div className="content-card">
              <div className="content-personal">
              <h4>Datos Personales:</h4>
                <h6><i className="bi bi-person-fill"></i>Nombre:{item.name} </h6>
                <h6><i className="bi bi-person-bounding-box"></i> Usuario:{item.username}</h6>
                <h6><i className="bi bi-envelope-fill"></i>Email: {item.email}</h6>
                
              </div>  
              <div className="content-city">
                <h4><i className="bi bi-geo-alt-fill"></i>Dirección:</h4>
                <h6>Calle:{item.address.street}</h6>
                <h6>Ciudad:{item.address.city}</h6>
                <h6>Código postal: {item.address.zipcode}</h6>
              </div>  
            </div>
          </div>
          </div>
    );
}

export default CardProfile;