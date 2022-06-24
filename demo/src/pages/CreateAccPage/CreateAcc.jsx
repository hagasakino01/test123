import { LeftLayout } from './components/Left/LeftLayout';
import { RightLayout } from './components/Right/RightLayout';
import './CreateAcc.css';

function CreateAcc(){
    return (
        <div className='create-container'><LeftLayout></LeftLayout>
        <RightLayout></RightLayout>
        </div>
    )
}
export default CreateAcc