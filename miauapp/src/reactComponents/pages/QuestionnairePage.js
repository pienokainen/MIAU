import { React } from 'react';
import Button from '../components/Button.js';
import './styles.css';


export default function QuestionnairePage() {

    return (<div class="button-group">
                <Button buttonText={"Vastausvaihtoehto 1"} classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
                <Button buttonText={"Vastausvaihtoehto 2"} classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
                <Button buttonText={"Vastausvaihtoehto 3"} classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
            </div>);

}