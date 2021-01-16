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

    return (<div class="button-group">
                <Button buttonText={"Vastausvaihtoehto 1"} classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
                <Button buttonText={"Vastausvaihtoehto 2"} classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
                <Button buttonText={"Vastausvaihtoehto 3"} classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
            </div>);

}