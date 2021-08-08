import Loader from "react-loader-spinner";

function LoaderComp(){
        return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <Loader
            type="TailSpin"
            style={{ marginTop: '270px' }}
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            />
       </div>
    );
    }
export default LoaderComp