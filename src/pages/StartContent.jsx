import './Content.css';
import Contentmiddle from '../contentmiddle';
import Contenttop from '../contenttop';
import Contentbottom from '../contentbottom';

function StartContent(){

    return(
        <div className='contentcontainer'>
            <Contenttop/>
            <Contentmiddle/>
            <Contentbottom/>
        </div>
    );
}
export default StartContent;