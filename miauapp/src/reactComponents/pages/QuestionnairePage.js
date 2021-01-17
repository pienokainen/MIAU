import { React } from 'react';
import { GetStoryItems } from '../../services';
import Button from '../components/Button.js';
import './styles.css';


export default function QuestionnairePage(props) {

    const handleClick = () => {
        // TODO: logic to handle answering
        let onLastPage = false;
        let correct = false;

        if (correct) {

            // TODO: logic to handle positive feedback. Perhaps timeout to let person read and then continue?

            if (onLastPage) {
                props.handlePageChange('reportPage');
            }

            // TODO: get correct data from database
            props.handlePageChange('storyPage');
        }

        // TODO: logic to handle negative feedback
    }
    let bgrUrls = []
    bgrUrls[0] = "./public/databaseMock/images/suojatie.png"
    bgrUrls[1] = "https://tpc.googlesyndication.com/simgad/1639573414314707741?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qlFYiYFj_WuaJ8JAoWxkR7nwzAqmg"
    bgrUrls[2] = "https://tpc.googlesyndication.com/simgad/1639573414314707741?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qlFYiYFj_WuaJ8JAoWxkR7nwzAqmg"


    return (
        <div id="wrapper">
            <h3> New Page </h3>
            <div class="button-group">
                <Button
                bgrUrl={bgrUrls[0]}
                classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
                <Button
                bgrUrl={bgrUrls[1]}
                classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
                <Button
                bgrUrl={bgrUrls[2]}
                classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
            </div>
        </div>
        );

}
