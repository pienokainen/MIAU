import { React } from 'react';
import Button from '../components/Button.js';



export default function SettingsView() {
    return (
      <div id="viewWrapper">
        <div className="button-group">
          <Button buttonText={"NEW BUTTON"}
                classPosition={"start-button"}
                classStyle={"start-button-style"}
                />
        </div>
      </div>
    );
}
