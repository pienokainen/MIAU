import { React } from 'react';
import './styles.css';
import StoryImage from '../components/StoryImage.js';


export default function Stipend(props) {


    return (
        <div class={props.classPosition}>
          {/* Background */}
          {/* Heading */}
          <h3> Stipendi </h3>
          {/* Name */}
          <h4> Nimi </h4>
          {/* Approved by */}
          <h4> M.I.A.U </h4>
          {/* Stamp */ }
          <StoryImage />
        </div>
      );
}
