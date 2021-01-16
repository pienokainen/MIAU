import { React } from 'react';
import Button from '../components/Button.js';
import './styles.css';


export default function QuestionnairePage() {

    return (
        <div id="wrapper">
            <h3> New Page </h3>
            <div class="button-group">
                <Button classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
                <Button classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
                <Button classPosition={"questionnaire-button"} classStyle={"questionnaire-button-style"}/>
            </div>
        </div>
        );

}
