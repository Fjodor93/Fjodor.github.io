import './Content.css';
import Contentmiddle from './contentmiddle';
import Contenttop from './contenttop';
import Contentbottom from './contentbottom';

function StartContentMobile(){
    return(
        <div className="contentcontainermobile">
            <Contenttop/>
            <Contentmiddle/>
            <Contentbottom/>
        </div>
    );
}
export default StartContentMobile;